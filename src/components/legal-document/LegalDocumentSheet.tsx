import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "../Icons";
import { Documents } from "./DocumentsList";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

export function LegalDocumentSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=" text-md" variant="secondary">
          <Icons.LibraryBig className="text-purple-800 mr-2" /> Legal Forms
        </Button>
      </SheetTrigger>
      <SheetContent className=" w-80" side="left">
        <SheetHeader>
          <SheetTitle className="text-purple-800 text-4xl">
            Legal Documents
          </SheetTitle>
          <SheetDescription>
            A Categorized Legal Documentation Shell.
          </SheetDescription>
          <Separator />
          <h2>Available Documents</h2>
        </SheetHeader>
        <div className="flex flex-col space-y-2 mt-2">
          {Documents.map((doc) => (
            <Link
              key={doc.id}
              className={cn(
                "flex items-center justify-centertext-2xl",
                buttonVariants({ variant: "outline" })
              )}
              href={`/legal-docs/${doc.id}`}
            >
              <SheetClose className=" flex items-center justify-center">
                {doc.icon}
                {doc.title}
              </SheetClose>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
