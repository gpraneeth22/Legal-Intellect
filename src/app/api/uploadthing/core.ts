import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { pinecone } from "@/lib/pinecone";
import { PineconeStore } from "@langchain/community/vectorstores/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  pdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = getUser();

      if (!user || !user.id) throw new Error("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.userId,
          url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
          uploadStatus: "PROCESSING",
        },
      });

      try {
        const response = await fetch(
          `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`
        );
        const blob = await response.blob();

        const loader = new PDFLoader(blob);

        const pageLevelDocs = await loader.load();

        const pagesAmt = pageLevelDocs.length;

        // vectorize and index entire document

        const pineconeIndex = pinecone.Index("quill");

        const embeddings = new OpenAIEmbeddings({
          openAIApiKey: process.env.OPENAI_SERET_KEY,
        });

        await PineconeStore.fromDocuments(pageLevelDocs, embeddings, {
          pineconeIndex,
          namespace: createdFile.id,
        });
        await db.file.update({
          data: {
            uploadStatus: "SUCCESS",
          },
          where: {
            id: createdFile.id,
          },
        });
      } catch (error) {
        await db.file.update({
          data: {
            uploadStatus: "FAILED",
          },
          where: {
            id: createdFile.id,
          },
        });
      }
    }),
  securePdfUploader: f({ pdf: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = getUser();

      if (!user || !user.id) throw new Error("Unauthorized");

      const shellToken = req.cookies.get("shell_token");

      if (!shellToken) {
        throw new Error("Permission Denied");
      }

      try {
        const verified = (
          await jwtVerify(
            shellToken.value,
            new TextEncoder().encode(process.env.SHELL_SECRET)
          )
        ).payload as { userId: string };
        if (!verified.userId) {
          throw new Error("Permission Denied");
        }
      } catch (error) {
        throw new Error("Permission Denied");
      }

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.userId,
          isSecured: true,
          url: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.key}`,
          uploadStatus: "SUCCESS",
        },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
