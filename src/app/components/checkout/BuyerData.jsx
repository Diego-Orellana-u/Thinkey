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
    <div className="px-3 mobile-m:px-5 mb-5 tablet-s:px-0">
      <span className="font-semibold text-p-xl text-[#444] mb-3 block ">
        Buyer Information
      </span>
      <Form {...form}>
        <form>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="cumpleaños"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <>
                      <Input
                        className="outline-none bg-[#fdfbf3] border-2 border-gray-100/20 rounded-[5px] text-p-xs font-medium focus:bg-[#f5f3eb] placeholder:text-[#666]/80 py-6 px-3"
                        placeholder="Nombre"
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Apellido"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <>
                      <Input
                        className="outline-none bg-[#fdfbf3] border-2 border-gray-100/20 rounded-[5px] text-p-xs font-medium focus:bg-[#f5f3eb] placeholder:text-[#666]/80 py-6 px-3"
                        placeholder="Apellido"
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Dirección"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <>
                      <Input
                        className="outline-none bg-[#fdfbf3] border-2 border-gray-100/20 rounded-[5px] text-p-xs font-medium focus:bg-[#f5f3eb] placeholder:text-[#666]/80 py-6 px-3"
                        placeholder="Dirección"
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Teléfono"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <>
                      <Input
                        className="outline-none bg-[#fdfbf3] border-2 border-gray-100/20 rounded-[5px] text-p-xs font-medium focus:bg-[#f5f3eb] placeholder:text-[#666]/80 py-6 px-3"
                        placeholder="Teléfono"
                        {...field}
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="Correo"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormControl>
                    <>
                      <Input
                        className="outline-none bg-[#fdfbf3] border-2 border-gray-100/20 rounded-[5px] text-p-xs font-medium focus:bg-[#f5f3eb] placeholder:text-[#666]/80 py-6 px-3"
                        placeholder="Correo"
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
