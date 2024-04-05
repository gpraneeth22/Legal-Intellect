import MySecuredFiles from "@/components/secure-shell/SecuredFiles";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


const SecureShell = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect("/api/auth/login");

  return (
    <div className=" container mt-10">
      <section className="w-full">
        <h1 className="text-6xl font-semibold text-purple-800">Secure Shell</h1>
      </section>
      <MySecuredFiles/>
    </div>
  );
};

export default SecureShell;
