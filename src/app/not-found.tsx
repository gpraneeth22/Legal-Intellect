import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
  return (
    <div className=" h-[100vh] flex flex-col items-center justify-center ">
      <h2>404 | Page Not Found </h2>
      <p>
        Return
        <Button className="text-xl" asChild variant={"link"}>
          <Link href="/dashboard">Home</Link>
        </Button>
      </p>
    </div>
  );
}
