"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";

interface PasswordFormProps {
  label: string;
}

const passwordFormSchema = z.object({
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

const PasswordForm = ({ label }: PasswordFormProps) => {
  const router = useRouter();

  // Form
  const titleForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      password: "",
    },
  });
  // Submit
  const onSubmit = async (values: z.infer<typeof passwordFormSchema>) => {
    const res = await fetch("/api/shell/checkPassword", {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (res.ok) {
      toast.success("Successfull!", {
        description: "Here is your Secure Shell!",
      });
      router.refresh();
    } else {
      toast.error("Invalid Password", { description: "Please try again!" });
    }
  };

  return (
    <Form {...titleForm}>
      <form onSubmit={titleForm.handleSubmit(onSubmit)} className=" space-y-8">
        <FormField
          control={titleForm.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className=" text-xl">{label}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Password"
                  className=" w-1/2 mt-2"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription className=" font-semibold">
                *Note: If this is your initial login attempt, As a security
                measure, please set your desired password to access Your Secure
                Shell
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Continue</Button>
      </form>
    </Form>
  );
};

export default PasswordForm;
