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
import { Label } from "../ui/label";
import Link from "next/link";
import { useId } from "react";

const formSchema = z.object({
  nombre: z.string().min(2).max(50),
  apellido: z.string().min(2).max(50),
  correo: z.string().min(7).max(50), // TODO: Validacion de correo
  telefono: z.string().min(7).max(20),
  mensaje: z.string().min(10).max(500),
});

export default function ServicesForm({ formFields, btnText }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      mensaje: "",
    },
  });

  const formId = useId();

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  console.log(formFields, "formFields");
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {formFields.map((fieldInfo, index) => (
          <div key={formId + index}>
            {Array.isArray(fieldInfo) ? (
              <div className="flex flex-col tablet-l:flex-row tablet-l:gap-10 desktop-s:gap-5">
                {fieldInfo.map((subField) => (
                  <FormField
                    key={subField.key}
                    control={form.control}
                    name={subField.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <>
                            <Label
                              htmlFor={subField.key}
                              className="mb-4 block"
                            >
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
                key={fieldInfo.key}
                control={form.control}
                name={fieldInfo.name}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {fieldInfo.name === "Mensaje" ? (
                        <>
                          <Label htmlFor={fieldInfo.key} className="mb-4 block">
                            {fieldInfo.placeholder}
                          </Label>
                          <Textarea
                            placeholder={fieldInfo.placeholder}
                            id={fieldInfo.key}
                          />
                        </>
                      ) : (
                        <>
                          <Label htmlFor={fieldInfo.key} className="mb-4 block">
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
            )}
          </div>
        ))}

        <div className="flex flex-col justify-end items-end">
          <span className="block ">
            By clicking “Submit” I agree to the{" "}
            <Link href="/" className="text-orange-600">
              Terms of Use
            </Link>{" "}
            and the{" "}
            <Link href="/" className="text-orange-600">
              Privacy Statement
            </Link>
          </span>
          <Button
            variant="testLarge"
            type="submit"
            className={`relative mt-5 w-2/4`}
          >
            <span className="z-10">{btnText}</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
