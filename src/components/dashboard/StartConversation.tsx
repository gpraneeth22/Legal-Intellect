import { MessageSquarePlus, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import AddTitleForm from "./AddTitleForm";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface StartConversationProps {
  classname?: string,
  title?: string
}

const StartConversation = ({classname, title = "Start Conversation"}:StartConversationProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={cn("text-md text-center",classname)}>
          <MessageSquarePlus className="h-6 w-6 mr-1" />{title}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Title</DialogTitle>
          <DialogDescription>
            Please enter a title before proceeding to chat
          </DialogDescription>
        </DialogHeader>
        <AddTitleForm />
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default StartConversation;
