"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";

const addTitleFormSchema = z.object({
  chatTitle: z.string().min(1, { message: "Title should not be empty" }),
});


const AddTitleForm = () => {

  const router = useRouter()

  const {mutate: startConversation} = trpc.bot.createBotChat.useMutation({
    onSuccess: (data) => {
      router.push(`/dashboard/lawq/${data.id}`)
    }
  })

  // Form
  const titleForm = useForm<z.infer<typeof addTitleFormSchema>>({
    resolver: zodResolver(addTitleFormSchema),
    defaultValues: {
      chatTitle: "",
    },
  });
  // Submit
  const onSubmit = (values: z.infer<typeof addTitleFormSchema>) => {
    startConversation({title: values.chatTitle})
  };

  return (
    <Form {...titleForm}>
      <form onSubmit={titleForm.handleSubmit(onSubmit)} className=" space-y-8">
        <FormField
          control={titleForm.control}
          name="chatTitle"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Title. Eg.: Social Law Discussion" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit">Start Conversation</Button>
      </form>
    </Form>
  );
};

export default AddTitleForm;