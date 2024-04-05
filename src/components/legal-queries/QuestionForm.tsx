"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cities } from "@/lib/legalQueries/indianCities";
import { categories, categoryValues } from "@/lib/legalQueries/queryCategories";
import { Textarea } from "../ui/textarea";
import { trpc } from "@/app/_trpc/client";
import { QuestionFormSchema } from "@/types/questionFormSchema";
import { toast } from "sonner";

interface QuestionFormProps {
  isLoggedIn: boolean;
}

const QuestionForm = ({ isLoggedIn }: QuestionFormProps) => {
  let userName = "";
  let userEmail = "";

  if (isLoggedIn) {
    const { data, isError } = trpc.user.getUserByEmail.useQuery();
    if (!isError) {
      userEmail = data?.email!;
      if (data?.first_name) {
        userName += data.first_name + " ";
      }
      if (data?.last_name) {
        userName += data.last_name;
      }
    }
  } else {
    QuestionFormSchema.refine((data) => data.email !== "", {
      message: "Email is required",
    });
    QuestionFormSchema.refine((data) => data.name !== "", {
      message: "Name should not be empty",
    });
  }

  const questionForm = useForm<z.infer<typeof QuestionFormSchema>>({
    resolver: zodResolver(QuestionFormSchema),
    defaultValues: isLoggedIn
      ? {
          subject: "",
          query: "",
        }
      : {
          subject: "",
          query: "",
          name: "",
          email: "",
        },
  });

  const utils = trpc.useUtils();

  const { mutate: postQuestion } = trpc.user.askQuestion.useMutation({
    onSuccess: () => {
      toast.success("Question Posetd", {
        description: "Our Attorney will answer your Query shortly",
      });
      utils.user.getUserQueriesByEmail.invalidate();
    },
    onError: (error) =>
      toast.error("Something went wrong", { description: error.message }),
  });

  const submitQuestion = (values: z.infer<typeof QuestionFormSchema>) => {
    if (isLoggedIn) {
      values.email = userEmail;
      values.name = userName;
    }
    postQuestion(values);
    questionForm.reset();
  };

  return (
    <Form {...questionForm}>
      <form
        onSubmit={questionForm.handleSubmit(submitQuestion)}
        className="space-y-2 border-2 p-5"
      >
        <FormField
          control={questionForm.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an Area/Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={questionForm.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select your City</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your Nearest City" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cities.map((city) => {
                    return (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={questionForm.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject of your Query</FormLabel>
              <FormControl>
                <Input
                  maxLength={100}
                  placeholder="Subject. Ex:Divorce Issue"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
              {questionForm.formState.isDirty && (
                <FormDescription>
                  {questionForm.watch("subject").length}/100
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={questionForm.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Query</FormLabel>
              <FormControl>
                <Textarea
                  maxLength={300}
                  placeholder="Enter your Question here..."
                  {...field}
                />
              </FormControl>
              {questionForm.formState.isDirty && (
                <FormDescription>
                  {questionForm.watch("query").length}/300
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        {!isLoggedIn && (
          <h1 className=" text-4xl text-purple-700 font-semibold">
            Contact Details
          </h1>
        )}
        {!isLoggedIn && (
          <FormField
            control={questionForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {!isLoggedIn && (
          <FormField
            control={questionForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button className=" text-center flex justify-center" type="submit">
          Post
        </Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
