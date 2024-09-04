"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function ServicesForm({ formFields, btnText }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formFields.map((fieldInfo) => (
          <>
            <FormField
              control={form.control}
              key={fieldInfo.key}
              name={fieldInfo.name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="outline-none"
                      placeholder={fieldInfo.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ))}
        <div className="flex justify-end">
          <Button variant="testLarge" type="submit" className={`relative`}>
            <span className="z-10">{btnText}</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
