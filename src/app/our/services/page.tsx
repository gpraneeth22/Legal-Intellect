import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LegalAdvisorCard from "@/components/service-cards/LegalAdvisor";
import PdfChatCard from "@/components/service-cards/PdfChat";
import Link from "next/link";

const FeaturesPage = () => {
  return (
    <main className=" mx-48 mt-20">
      <div className="mx-auto text-center mb-12 px-16">
        <h1 className="font-bold text-purple-800 text-5xl md:text-6xl lg:text-7xl">
          Our Services
        </h1>
      </div>
      {/* ------LAWQUE------ */}
      <section className="flex flex-col border rounded-md border-zinc-200 py-8 mt-16">
        <div className="flex py-8">
          <div className="w-1/2">
            
            <div className="px-14">
              <PdfChatCard className=" shadow-md" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
          <div className=" mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="pointer-events-none select-none text-sm font-semibold text-gray-700">
                LawQue is now Public!
              </p>
            </div>
            <p className="text-center mx-auto my-auto max-w-sm">
              Our LawQue is an AI tool aiding users with legal queries and
              document discussions. It analyzes uploaded PDFs, engaging in
              real-time conversations based on their content. Through machine
              learning, it simplifies legal complexities, offering accurate
              guidance and aiding in dispute resolution. The bot serves as a
              reliable advisor, providing tailored advice and facilitating
              informed decisions in legal matters.
            </p>
            <Link className="hover:underline text-gray-400" href="/our/lawque">
              Learn More
            </Link>
          </div>
        </div>
        <ol className="m-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Q&A
              </span>
              <span className="text-xl font-semibold">Start Asking Questions</span>
              <span>
                Start using with a free plan or choose a{" "}
                <Link
                  href="/pricing"
                  className="text-purple-700 underline underline-offset-2"
                >
                  plan
                </Link>
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Chat with PDF
              </span>
              <span className="text-xl font-semibold">Upload Document</span>
              <span>
                We&apos;ll process your file amd make LawQue ready to chat
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Take an Advice
              </span>
              <span className="text-xl font-semibold">
                Ask for an Advice
              </span>
              <span>
                That&apos;s what it takes. Try{" "}
                <span className="font-semibold text-purple-600">LawQue</span> -
                in just less than a minute.
              </span>
            </div>
          </li>
        </ol>
      </section>
      {/* ------LEGAL ADVISOR------ */}
      <section className="flex flex-col border rounded-md border-zinc-200 py-8 mt-16">
        <div className="flex py-8">
          <div className="w-1/2">
            
            <div className="px-14">
              <LegalAdvisorCard className=" shadow-md" />
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
          <div className=" mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="pointer-events-none select-none text-sm font-semibold text-gray-700">
                Coming soon!
              </p>
            </div>
            <p className="text-center mx-auto my-auto max-w-sm">
              Our LawQue is an AI tool aiding users with legal queries and
              document discussions. It analyzes uploaded PDFs, engaging in
              real-time conversations based on their content. Through machine
              learning, it simplifies legal complexities, offering accurate
              guidance and aiding in dispute resolution. The bot serves as a
              reliable advisor, providing tailored advice and facilitating
              informed decisions in legal matters.
            </p>
            <Link className="hover:underline text-gray-400" href="/lawque">
              Learn More
            </Link>
          </div>
        </div>
        <ol className="m-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Q&A
              </span>
              <span className="text-xl font-semibold">Start Asking Questions</span>
              <span>
                Start using with a free plan or choose a{" "}
                <Link
                  href="/pricing"
                  className="text-purple-700 underline underline-offset-2"
                >
                  plan
                </Link>
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Chat wit Legal Advisor
              </span>
              <span className="text-xl font-semibold">Upload Document</span>
              <span>
                We&apos;ll process your file amd make LawQue ready to chat
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-medium text-purple-600">
                Schedule a Meeting
              </span>
              <span className="text-xl font-semibold">
                Connect with Legal advisor
              </span>
              <span>
                That&apos;s what it takes. Try{" "}
                <span className="font-semibold text-purple-600">LawQue</span> -
                in just less than a minute.
              </span>
            </div>
          </li>
        </ol>
      </section>
    </main>
  );
};

export default FeaturesPage;
