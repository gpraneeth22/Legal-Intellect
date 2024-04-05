import FAQ from "@/components/legal-queries/FAQ";
import LatestAnswers from "@/components/legal-queries/LatestAnswers";
import QuestionForm from "@/components/legal-queries/QuestionForm";
import UserQueries from "@/components/legal-queries/UserQueries";
import UsersReview from "@/components/legal-queries/UsersReview";
import { Separator } from "@/components/ui/separator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const QueriesPage = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const isLoggedIn: boolean = user && user.id ? true : false;
  return (
    <div className="container mt-10">
      {/* Header */}
      <section className=" w-full">
        <h1 className="text-6xl font-semibold text-purple-800">
          Ask a Legal Question{" "}
        </h1>
        <br />
        <h4 className="text-lg text-zinc-600">
          Stuck with a legal issue? Submit your query below to get FREE answers
          by email within a few hours. Expert legal advice from top rated
          lawyers in your city enables you to take better decisions about your
          legal situation.
        </h4>
        <br />
      </section>
      <div className="flex space-x-6">
        <section className=" w-[60%]">
          <QuestionForm isLoggedIn={isLoggedIn} />
        </section>
        {/* Right Side */}
        <aside className=" w-[40%]">
          <FAQ />
        </aside>
      </div>
      <Separator className=" mt-11" />
      {/* Footer */}
      {isLoggedIn ? (
        <UserQueries />
      ) : (
        <section>
          <Separator className=" mt-11" />
          <UsersReview />
          <LatestAnswers />
        </section>
      )}
    </div>
  );
};

export default QueriesPage;
