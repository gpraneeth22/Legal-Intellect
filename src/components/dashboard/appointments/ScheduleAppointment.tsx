"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cities } from "@/lib/legalQueries/indianCities";
import { categories } from "@/lib/legalQueries/queryCategories";

import { ScheduleAppointmetSchema } from "@/types/scheduleAppoinemtForm";
import { trpc } from "@/app/_trpc/client";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ScheduleAppointmentProps {
  lawyerId?: string;
}

const ScheduleAppointment = () => {
  const router = useRouter();

  const { data: legalAdvisors, isLoading } =
    trpc.user.getLegalAdvisors.useQuery();

  const { mutate: scheduleAppointment } =
    trpc.user.scheduleAppointment.useMutation({
      onSuccess: () => router.push("/dashboard/appointments"),
      onError: () => {
        toast.error("Something went wrong!", {
          description: "Please try again later",
        });
      },
    });

  const appointmentForm = useForm<z.infer<typeof ScheduleAppointmetSchema>>({
    resolver: zodResolver(ScheduleAppointmetSchema),
    defaultValues: {
      subject: "",
      mobile: "",
      lawyer: "",
      date: new Date(),
    },
  });

  const submitAppointment = (
    values: z.infer<typeof ScheduleAppointmetSchema>
  ) => {
    scheduleAppointment(values);
  };

  return (
    <Form {...appointmentForm}>
      <form
        onSubmit={appointmentForm.handleSubmit(submitAppointment)}
        className="space-y-2 border-2 p-5"
      >
        {/* Date */}
        <FormField
          control={appointmentForm.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" mr-2">Choose a Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={appointmentForm.control}
          name="lawyer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Legal Advisor</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Legal Advisor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {isLoading && (
                    <Loader2 className=" h-4 w-4 text-center text-purple-700" />
                  )}
                  {legalAdvisors?.map((advisor) => (
                    <SelectItem key={advisor.id} value={advisor.id}>
                      {advisor.first_name?.toUpperCase()}{" "}
                      {advisor.last_name?.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={appointmentForm.control}
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
          control={appointmentForm.control}
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
          control={appointmentForm.control}
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
              {appointmentForm.formState.isDirty && (
                <FormDescription>
                  {appointmentForm.watch("subject").length}/50
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={appointmentForm.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input maxLength={10} placeholder="Phone number" {...field} />
              </FormControl>
              <FormDescription>
                Note: Your Phone Number will not be disclosed to the Lawyer
                unless the Appointment get&apos;s Approved
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className=" text-center flex justify-center" type="submit">
          Post
        </Button>
      </form>
    </Form>
  );
};
export default ScheduleAppointment;
