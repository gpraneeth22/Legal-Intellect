"use client";

import { trpc } from "@/app/_trpc/client";
import { Ghost, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Icons } from "../Icons";
import { Badge } from "@/components/ui/badge";
import Skeleton from "react-loading-skeleton";
import { Button } from "../ui/button";
import { useState } from "react";

const UserQueries = () => {
  const [answer, setAnswer] = useState("");
  const [currentAnsweringQuery, setcurrentAnsweringQuery] = useState<
    string | null
  >("");

  const utils = trpc.useUtils();

  const { data: queries, isLoading } =
    trpc.user.getUserQueriesByEmail.useQuery();

  const { data: userRole } = trpc.user.getUserRole.useQuery();

  const { mutate: submitAnswer } = trpc.user.answerQuestion.useMutation({
    onSuccess: () => {
      utils.user.getUserQueriesByEmail.invalidate();
      toast.success("Answer submitted successfully");
    },
    onMutate: ({ queryId }) => setcurrentAnsweringQuery(queryId),
    onSettled: () => setcurrentAnsweringQuery(null),
  });

  return (
    <section className="pb-12">
      <div className="container px-6 py-5 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">
          Your <span className="text-purple-700 ">Queries</span>
        </h1>
      </div>
      {isLoading ? (
        <div className=" grid grid-cols-1 gap-8 xl:mb-12 lg:grid-cols-2 xl:grid-cols-3">
          <Skeleton height={150} width={400} className="my-2" />
          <Skeleton height={150} width={400} className="my-2" />
          <Skeleton height={150} width={400} className="my-2" />
        </div>
      ) : queries!.length === 0 ? (
        <div className=" flex flex-col items-center gap-2">
          <Ghost className="h-8 w-8 text-zinc-800" />
          <h3 className="text-xl font-semibold">Pretty empty around here</h3>
          <p>Post your Query</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-8 xl:mb-12 lg:grid-cols-2 xl:grid-cols-3">
          {queries!.map((query) => {
            return (
              <div
                key={query.id}
                className="relative px-8 py-4 border rounded-lg dark:border-gray-700"
              >
                <Badge className="absolute right-2" variant="default">
                  {query.queryCategory}
                </Badge>
                <h1 className=" text-xl font-semibold dark:text-gray-400 truncate">
                  {query.querySubject}
                </h1>
                <h2 className="leading-loose text-gray-500 dark:text-gray-400 truncate">
                  “{query.userQuery}?”
                </h2>
                <div className="flex items-center mt-8 -mx-2">
                  <div className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                    <Icons.user className="text-white" />
                  </div>
                  <div className="mx-2">
                    <h1 className="font-semibold text-gray-800 dark:text-white">
                      {query.userName}
                    </h1>
                    <span className="text-sm text-gray-500">
                      {userRole?.is_advisor
                        ? query.userEmail
                        : query.userLocation}
                    </span>
                  </div>
                </div>
                {userRole?.is_advisor && (
                  <div
                    key={query.id}
                    className="bg-white rounded-lg shadow-md mt-4 p-4"
                  >
                    <h2 className="text-xl font-bold mb-2">
                      {query.querySubject}
                    </h2>
                    <p className="text-gray-700">{query.userQuery}</p>
                    <p>
                      <span className="font-semibold">Location:</span>{" "}
                      {query.userLocation}
                    </p>
                    {!query.isAnswered && (
                      <div className="mt-2">
                        <textarea
                          className="w-full border border-gray-300 rounded-md p-2"
                          placeholder="Enter your answer..."
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <Button
                          className="mt-2 text-white py-2 px-4"
                          onClick={() =>
                            submitAnswer({ queryId: query.id, answer: answer })
                          }
                        >
                          {currentAnsweringQuery === query.id && (
                            <Loader2 className=" h-4 w-4 mr-1" />
                          )}
                          Submit
                        </Button>
                      </div>
                    )}
                    {query.isAnswered && (
                      <p className="mt-2 bg-green-100 text-green-800 p-2 rounded">
                        {query.answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default UserQueries;
