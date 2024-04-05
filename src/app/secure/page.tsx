import PasswordForm from "@/components/secure-shell/PasswordForm";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const SecureGatewayPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  var initialSetup = false;

  if (!user || !user.id) redirect("/api/auth/login");

  const shellToken = cookies().get("shell_token")?.value;
  if (shellToken) {
    const verified = (
      await jwtVerify(
        shellToken,
        new TextEncoder().encode(process.env.SHELL_SECRET)
      )
    ).payload as { userId: string };
    if (verified.userId) {
      redirect("/secure/shell");
    }
  }

  const securedUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
    select: {
      shellPass: true,
    },
  });

  if (!securedUser) redirect("/auth-callback?from=dashboard");

  if (!securedUser.shellPass) {
    initialSetup = true;
  }

  if (!securedUser.shellPass) {
    initialSetup = true;
  }

  return (
    <div className=" container mt-10">
      <section className=" w-full">
        <h1 className="text-6xl font-semibold text-purple-800">
          Secure Gateway
        </h1>
        <PasswordForm
          label={
            initialSetup
              ? "Please set a Password"
              : "Please enter your Password"
          }
        />
      </section>
    </div>
  );
};

export default SecureGatewayPage;
