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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "./ui/label";

const formSchema = z.object({
  Nombre: z.string().min(2).max(50),
  Apellido: z.string().min(2).max(50),
  Correo: z.string().min(7).max(50),
});

export default function ServicesForm({ formFields, btnText }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nombre: "",
    },
  });

  function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {formFields.map((fieldInfo) =>
          Array.isArray(fieldInfo) ? (
            <div className="flex flex-col tablet-l:flex-row mb-9 tablet-l:gap-10">
              {fieldInfo.map((subField) => (
                <FormField
                  control={form.control}
                  key={subField.key}
                  name={subField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <Label htmlFor={subField.key}>
                            {subField.placeholder}
                          </Label>
                          <Input
                            className="outline-none"
                            id={subField.key}
                            placeholder={subField.placeholder}
                            {...field}
                          />
                        </>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
          ) : (
            <FormField
              control={form.control}
              key={fieldInfo.key}
              name={fieldInfo.name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {fieldInfo.name === "Mensaje" ? (
                      <>
                        <Label htmlFor={fieldInfo.key}>
                          {fieldInfo.placeholder}
                        </Label>
                        <Textarea
                          placeholder={fieldInfo.placeholder}
                          id={fieldInfo.key}
                        />
                      </>
                    ) : (
                      <>
                        <Label htmlFor={fieldInfo.key}>
                          {fieldInfo.placeholder}
                        </Label>
                        <Input
                          id={fieldInfo.key}
                          className="outline-none"
                          placeholder={fieldInfo.placeholder}
                          {...field}
                        />
                      </>
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )
        )}
        <div className="flex justify-end">
          <Button
            variant="testLarge"
            type="submit"
            className={`relative mt-10`}
          >
            <span className="z-10">{btnText}</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
