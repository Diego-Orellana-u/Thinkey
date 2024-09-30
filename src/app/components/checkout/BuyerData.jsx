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
import { CalendarForm } from "../DatePicker";

const formSchema = z.object({
  Nombre: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 letras" })
    .max(50),
  Apellido: z.string().min(2).max(50),
  Correo: z.string().min(7).max(50),
});

export default function BuyerData() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nombre: "",
    },
  });

  return (
    <div className="px-3 mobile-m:px-5">
      <Form {...form}>
        <form>
          <div className="flex flex-col tablet-l:flex-row tablet-l:gap-10 desktop-s:gap-5">
            <FormField
              control={form.control}
              name="cumpleaños"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Input
                        className="outline-none"
                        placeholder="Nombre"
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
