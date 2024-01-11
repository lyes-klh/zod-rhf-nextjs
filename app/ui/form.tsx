"use client";

import React from "react";
import InputGroup from "@/app/ui/input-group";
import Button from "@/app/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import type { FormValues } from "@/app/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/app/lib/types";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    try {
      const response = await fetch("/api/signup", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.errors) {
        const errors = responseData.errors;
        console.log(errors);
        if (errors.name)
          setError("name", {
            type: "server",
            message: errors.name,
          });
        if (errors.email)
          setError("email", {
            type: "server",
            message: errors.email,
          });
        if (errors.password)
          setError("password", {
            type: "server",
            message: errors.password,
          });
        if (errors.confirmPassword) {
          setError("confirmPassword", {
            type: "server",
            message: errors.confirmPassword,
          });
        }
      } else reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 w-full flex flex-col items-center gap-5"
    >
      <InputGroup
        name="name"
        type="text"
        errorMessage={errors.name?.message}
        label="Name"
        register={register}
        placeholder="John Doe"
      />
      <InputGroup
        name="email"
        type="email"
        errorMessage={errors.email?.message}
        label="Email"
        register={register}
        placeholder="email@email.com"
      />
      <InputGroup
        name="password"
        type="password"
        errorMessage={errors.password?.message}
        label="Passwrod"
        register={register}
        placeholder="********"
      />
      <InputGroup
        name="confirmPassword"
        type="password"
        errorMessage={errors.confirmPassword?.message}
        label="Confirm Password"
        register={register}
        placeholder="********"
      />
      <Button loading={isSubmitting}>Submit</Button>
    </form>
  );
}
