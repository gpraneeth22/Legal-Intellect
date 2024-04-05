"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <div className=" my-80 flex flex-col justify-center items-center space-y-2">
      <h2 className=" text-2xl">Something went wrong!</h2>
      <Button onClick={router.back}>Go Back</Button>
    </div>
  );
}
