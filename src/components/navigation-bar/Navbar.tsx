import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import UserAccountMenu from "./UserAccountMenu";
import { Separator } from "../ui/separator";
import { LegalDocumentSheet } from "../legal-document/LegalDocumentSheet";
import { UserNavigationMenu } from "./UserNavigationMenu";
import { db } from "@/db";
import { Button } from "../ui/button";
import { UserCog } from "lucide-react";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  var isLoggedIn = false;
  var userRole = null;
  if (user) {
    isLoggedIn = true;
    userRole = await db.user.findUnique({
      where: {
        id: user.id!,
      },
      select: {
        is_admin: true,
        is_advisor: true,
      },
    });
  }

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-16 w-full border-b border-gray-200 bg-[#1D0551]/90 py-1 backdrop-blur-lg transition-all">
      {isLoggedIn && (
        <div className="absolute left-4 top-2">
          <LegalDocumentSheet />
        </div>
      )}
      <MaxWidthWrapper>
        <div className="flex items-center justify-between pt-1 lg:px-2">
          <Link href={isLoggedIn ? "/dashboard" : "/"}>
            <Image src={"/Asset 1.png"} height={48} width={102} alt="logo" />
          </Link>
          <UserNavigationMenu
            isLoggedIn={isLoggedIn}
            isAdmin={userRole?.is_admin}
            isAdvisor={userRole?.is_advisor}
          />
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <UserAccountMenu />
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <RegisterLink className="z-10 rounded-lg bg-white px-5 py-2 text-lg font-semibold text-purple-700 duration-100 hover:underline hover:shadow-md ">
                Try Now
              </RegisterLink>
              <Separator className="h-7" orientation="vertical" />
              <LoginLink className="z-10 rounded-lg bg-purple-700 px-5 py-[0.46rem] text-lg font-semibold text-white duration-100 hover:bg-purple-600 hover:shadow-md ">
                Sign In
              </LoginLink>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
      {userRole?.is_admin && (
        <div className="absolute right-4 top-2">
          <Button className=" text-md" variant={"secondary"} asChild>
            <Link href={"/admin/users"}>
              <UserCog className="text-purple-800 mr-2" /> Manage Users
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
