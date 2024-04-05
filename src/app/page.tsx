import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Intro from "@/components/landing-page/intro";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import IntroChat from "@/components/landing-page/intochat";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <div className="space-y-24">
      <Intro />
      <IntroChat />
      <Footer />
    </div>
  );
}
