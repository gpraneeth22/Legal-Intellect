"use client";
import { trpc } from "@/app/_trpc/client";
import UploadButton from "../dashboard/UploadButton";
import { FileCheck2, Ghost, Loader2, MessageSquare, Plus, ShieldCheck, Trash } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const MySecuredFiles = () => {
  const utils = trpc.useUtils();
  const router = useRouter()

  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<
    string | null
  >(null);

  const { data: files, isLoading } = trpc.shell.getUserFiles.useQuery(undefined, {
    retry: (_count, err) => {
      if(err.data?.code === "FORBIDDEN") return false
      return true
    },
    onError: (err) => {
      if(err.data?.code==="FORBIDDEN") {
        toast.warning("Session timed out!", {description: "Please Login again!"})
        router.push("/secure")
      } 
    }
  });

  const { mutate: deleteFile } = trpc.shell.deleteFile.useMutation({
    onSuccess: (file) => {
      toast.success(`${file.name}`, {description: "Deleted Successfully"})
      utils.shell.getUserFiles.invalidate();
    },
    onMutate: ({ id }) => {
      setCurrentlyDeletingFile(id);
    },
    onSettled() {
      setCurrentlyDeletingFile(null);
    },
  });

  return (
    <main className="mx-auto max-w-7xl mt-4 md:p-8">
      <div className=" flex flex-col items-start justify-between gap-4 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-4xl text-gray-900">Encrypted Files</h1>
      </div>

      {/* Display all user files */}
      {files && files.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((file) => (
              <li
                key={file.id}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
              >
                <Link
                  href={"#"}
                  className="flex flex-col gap-2"
                >
                  <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex items-center justify-center flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                      <FileCheck2 className=" text-white"/>
                    </div>
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-lg font-medium text-zinc-900">
                          {file.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    {format(new Date(file.createdAt), "MMM yyyy")}
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    Encrypted
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger className="w-full" asChild>
                      <Button className=" w-full bg-destructive-button text-destructive-buttonFG hover:bg-destructive-button/90"
                      size="sm"
                      variant="destructive"
                      >
                        {currentlyDeletingFile === file.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash className="h-4 w-4" />
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete your file
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteFile({ id: file.id })}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </li>
            ))}
          <UploadButton isSecureFile={true} className="w-2/3" />
        </ul>
      ) : isLoading ? (
        <Skeleton height={100} className="my-2" count={3} />
      ) : (
        <div className="mt-16 flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="font-semibold text-xl">Pretty empty around here</h3>
          <p>Let&apos;s upload your first PDF.</p>
          <UploadButton isSecureFile={true} className="w-fit" />
        </div>
      )}
    </main>
  );
};

export default MySecuredFiles;