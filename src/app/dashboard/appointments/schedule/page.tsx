import ScheduleAppointment from "@/components/dashboard/appointments/ScheduleAppointment";
import FAQ from "@/components/legal-queries/FAQ";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const AppointmentSchedulePage = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user! || !user.id) redirect("/api/auth/login");
  return (
    <div className=" container mt-10">
      <section className=" w-full">
        <h1 className="text-6xl font-semibold text-purple-800">
          Schedule an Appointment{" "}
        </h1>
        <br />
      </section>
      <div className="flex space-x-6">
        <section className=" w-[60%]">
          <ScheduleAppointment />
        </section>
        {/* Right Side */}
        <aside className=" w-[40%]">
          <FAQ />
        </aside>
      </div>
    </div>
  );
};

export default AppointmentSchedulePage;
