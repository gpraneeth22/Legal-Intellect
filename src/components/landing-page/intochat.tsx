import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const IntroChat = () => {
  return (
    <div className=" flex items-center mt-10 mb-11">
      <div className="w-1/2 ">
        {/* <div className=" shadow-2xl shadow-purple-800"><img src={chat} className="px-40 py-8"></img></div> */}
        <div className="w-1/2 ml-32 ">
          <Image
            src="/chat.png"
            alt="background-display"
            width={760}
            height={120}
            className=" rounded-2xl border-2  shadow-2xl shadow-purple-800 w-full"
          />
        </div>
      </div>
      <div className="w-1/2 flex ">
        <div className=" text-center ml-20 space-y-10">
          <div className=" space-y-3">
            <h3 className="font-bold text-purple-800 text-7xl">
              Empower your
            </h3>
            <h3 className="font-bold text-purple-800  text-6xl">
              Legal Journey with{" "}
            </h3>
            <h3 className="font-bold text-purple-800 stroke- text-7xl first-letter:text-8xl"> <span id="law" className= "" >Law</span>Que</h3>
          </div>
          <div className=" px-8 text-center ">
            <p className=" font-medium text-lg mt-6 px-10">
              Join us today and experience the confidence of knowing your legal
              world is protected while having instant access to the knowledge
              and support of legal professionals. Your peace of mind is our
              priority, and we&apos;re here to help you unlock the full potential of
              your legal journey.
            </p>
          </div>
          {/* <p className='text-black font-medium text-lg mt-6'>We believe that legal assistance should be accessible to everyone. LawQue connects you with our network of professional lawyers, providing you with the guidance and support you need, whenever you need it. Whether you're seeking advice, consultations, or full legal representation, our platform ensures a seamless experience</p> */}
          <div className=" p-4">
            <Link
              href={"/our/lawque"}
              className=" w-72 border-2 border-purple-800 rounded-xl text-purple-700 px-7 py-4  font-bold shadow-md"
            >
              Try Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroChat;
