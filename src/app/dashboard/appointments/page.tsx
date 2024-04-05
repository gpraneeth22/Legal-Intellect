import MyFiles from "@/components/dashboard/MyFiles";
import MyAppointments from "@/components/dashboard/appointments/MyAppointments";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const AppointmentPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user! || !user.id) redirect("/api/auth/login");

  return <MyAppointments />;
};

export default AppointmentPage;
