import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MyFiles from "@/components/dashboard/MyFiles";
import Conversations from "@/components/dashboard/MyConversations";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user! || !user.id) redirect("/api/auth/login");

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?from=dashboard");

  return (
    <>
      <MyFiles />
      <Conversations />
    </>
  );
};

export default DashboardPage;
