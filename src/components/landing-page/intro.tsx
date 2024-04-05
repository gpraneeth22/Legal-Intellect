import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

const Intro = () => {
  return (
    <div>
      <div className=" flex items-center">
        <div className="w-1/2">
          <div className=" space-y-10 text-center ml-20 ">
            <div className=" space-y-3">
              <h3 className="font-bold text-purple-800 text-7xl">
                Where Legal Security{" "}
              </h3>
              <h3 className="font-bold text-purple-800 text-6xl">
                Meets Seamless{" "}
              </h3>
              <h3 className="font-bold text-purple-800 text-7xl">Access</h3>
            </div>

            <div className=" p-8 text-center ">
              <p className="text-black font-medium text-lg mt-6 px-10">
                We believe that legal assistance should be accessible to
                everyone. LawQue connects you with our network of professional
                lawyers, providing you with the guidance and support you need,
                whenever you need it. Whether you&apos;re seeking advice,
                consultations, or full legal representation, our platform
                ensures a seamless experience
              </p>
            </div>
            {/* <p className='text-black font-medium text-lg mt-6'>We believe that legal assistance should be accessible to everyone. LawQue connects you with our network of professional lawyers, providing you with the guidance and support you need, whenever you need it. Whether you're seeking advice, consultations, or full legal representation, our platform ensures a seamless experience</p> */}
            <RegisterLink className="border-2 bg-purple-800 rounded-xl text-lg text-white px-8 py-4 font-bold shadow-md">
              Get Started
            </RegisterLink>
          </div>
        </div>
        <div className="w-1/2 px-40 py-8 ">
          <Image
            src="/init.png"
            alt="background-display"
            width={760}
            height={120}
            className="rounded-2xl shadow-2xl shadow-purple-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
