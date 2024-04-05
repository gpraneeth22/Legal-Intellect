"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";

import Dropzone from "react-dropzone";
import { Cloud, File, Loader2, Plus, X } from "lucide-react";
import { Progress } from "../ui/progress";
import { useUploadThing } from "@/lib/uploadThing";
import { toast } from "sonner";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface UploadButtonProps {
  isSecureFile: boolean;
  className?: string;
}

const UploadButton = ({ className, isSecureFile }: UploadButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUplpoadProgress] = useState(0);

  const pdfUploader = isSecureFile ? "securePdfUploader" : "pdfUploader"

  const { startUpload } = useUploadThing(pdfUploader);

  const { mutate: startPolling } = isSecureFile
    ? trpc.shell.getFile.useMutation({
        onSuccess: () => {
          const utils = trpc.useUtils();
          utils.shell.getUserFiles.invalidate();
        },
      })
    : trpc.file.getFile.useMutation({
        onSuccess: (file) => {
          router.push(`/dashboard/lawq/f/${file?.id}`);
        },
        retry: true,
        retryDelay: 500,
      });

  const startSimulatedProgress = () => {
    setUplpoadProgress(0);

    const interval = setInterval(() => {
      setUplpoadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <div
          className={cn(
            className,
            "col-span-1 cursor-pointer divide-y divide-gray-200 my-auto rounded-lg bg-white shadow transition hover:shadow-lg"
          )}
        >
          <div className="py-6 px-6 flex w-full items-center justify-between space-x-6">
            <div className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
              <Plus className=" text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-justify text-2xl font-medium text-zinc-900">
                  Add file
                </h3>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent
        onEscapeKeyDown={(event) => {
          if (isUploading) {
            event.preventDefault();
            return toast.warning("File Uploading...", {
              description: "Please wait",
            });
          }
        }}
        onInteractOutside={(event) => {
          if (isUploading) {
            event.preventDefault();
            return toast.warning("File Uploading...", {
              description: "Please wait",
            });
          }
        }}
      >
        <Dropzone
          multiple={false}
          onDrop={async (acceptedFile) => {
            setIsUploading(true);

            const progressInterval = startSimulatedProgress();

            // handle file uploading
            const res = await startUpload(acceptedFile);
            if (!res) {
              setIsOpen(!isOpen)
              toast.warning("Session expired!", {
                description: "Please Login again",
              });
              router.push("/secure");
              return
            }

            const [fileResponse] = res;

            const key = fileResponse?.key;
            if (!key) {
              setIsOpen(!isOpen)
              toast.warning("Session expired!", {
                description: "Please Login again",
              });
              router.push("/secure")
              return;
            }

            clearInterval(progressInterval);
            setUplpoadProgress(100);

            startPolling({ key });
          }}
        >
          {({ getRootProps, getInputProps, acceptedFiles }) => (
            <div
              {...getRootProps()}
              className=" border h-64 m-4 border-dashed border-gray-300 rounded-lg"
            >
              <div className=" flex items-center justify-center h-full w-full">
                <label
                  htmlFor="dropzone-file"
                  onClick={(event) => event.preventDefault()}
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-purple-50 hover:bg-purple-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Cloud className="h-6 w-6 text-zinc-500 mb-2" />
                    <p className="mb-2 text-sm text-zinc-700">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-zinc-500">PDF (up to 4MB)</p>
                  </div>
                  {acceptedFiles && acceptedFiles[0] ? (
                    <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                      <div className="px-3 py-2 h-full grid place-items-center">
                        <File className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="px-3 py-2 h-full text-sm truncate">
                        {acceptedFiles[0].name}
                      </div>
                    </div>
                  ) : null}
                  {isUploading ? (
                    <div className="w-full mt-4 max-w-xs mx-auto">
                      <Progress
                        value={uploadProgress}
                        indicatorColor={
                          uploadProgress === 100 ? "bg-green-500" : ""
                        }
                        className="h-1 w-full bg-zinc-200"
                      />
                      {uploadProgress === 100 ? (
                        <div className="flex gap-1 items-center justify-center text-sm text-zinc-700 text-center pt-2">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          Encrypting...
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  <input
                    {...getInputProps}
                    type="file"
                    id="dropzone-file"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}
        </Dropzone>
        <DialogClose
          onClick={(event) => {
            if (isUploading) {
              event.preventDefault();
              toast.warning("File uploading...", {
                description: "Please wait",
              });
            }
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
