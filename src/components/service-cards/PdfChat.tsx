import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  Check,
  File,
  MessageCircleIcon,
  MessageSquarePlus,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function PdfChatCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader className="text-purple-800">
        <CardTitle className="text-6xl text-center">
          <Link className="hover:underline" href="/lawque">
            LawQue
          </Link>
        </CardTitle>
        <CardDescription className="text-lg text-center">
          Guiding Legal solutions Empowering your rights{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <Button className="" variant="outline">
          Try Now <ArrowRight className=" pl-2 h-7 w-7" />{" "}
        </Button>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start Conversation</Button>
      </CardFooter>
    </Card>
  );
}
