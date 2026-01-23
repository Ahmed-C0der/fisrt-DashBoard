"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters long.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters long.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters long.",
  }),
  role: z.enum(["admin", "user"]),
});

export default function UserSheet() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "john.doe",
      email: "john.doe@gmail.com",
      password: "",
      phone: "+1 234 5678",
      location: "New York, NY",
      role: "user",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-primary-foreground text-black hover:bg-white/90 border-none"
        >
          Edit User
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[425px] flex flex-col h-full">
        <SheetHeader className="">
          <SheetTitle className="">Edit profile</SheetTitle>
          <SheetDescription className="">
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>

        <form 
          id="edit-user-form" 
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto py-4 pr-2"
        >
          <FieldGroup className="gap-6">
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel className="" htmlFor={field.name}>
                    Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    className=""
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="john.doe"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="">
                      {null}
                    </FieldError>
                  )}
                </Field>
              )}
            />
            
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel className="" htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    className=""
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="john.doe@gmail.com"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="">
                      {null}
                    </FieldError>
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel className="" htmlFor={field.name}>Password</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    className=""
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="********"
                    autoComplete="off"
                  />
                  <FieldDescription className="">
                    Use a strong password to keep your account secure.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="">
                      {null}
                    </FieldError>
                  )}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel className="" htmlFor={field.name}>Phone Number</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    className=""
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="+1 234 5678"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="">
                      {null}
                    </FieldError>
                  )}
                </Field>
              )}
            />

            <Controller
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel className="" htmlFor={field.name}>Location</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    className=""
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="New York, NY"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="">
                      {null}
                    </FieldError>
                  )}
                </Field>
              )}
            />

            <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field className="" data-invalid={fieldState.invalid}>
                  <FieldLabel className="" htmlFor={field.name}>Role</FieldLabel>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="admin" className="">Admin</SelectItem>
                      <SelectItem value="user" className="">User</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="">
                      {null}
                    </FieldError>
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <SheetFooter className="mt-auto pt-6 flex-row justify-end gap-2">
          <SheetClose asChild>
            <Button type="button" variant="outline" className="">
              Cancel
            </Button>
          </SheetClose>
          <Button type="submit" form="edit-user-form" className="">
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

