"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UnAuthorized() {
  const router = useRouter();
  return (
    <div className=" my-80 flex flex-col justify-center items-center space-y-2">
      <h2 className=" text-2xl">Permission Denied!</h2>
      <Button onClick={router.back}>Go Back</Button>
    </div>
  );
}
