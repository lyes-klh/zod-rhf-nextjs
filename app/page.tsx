"use client";

import InputGroup from "@/app/ui/input-group";
import Button from "@/app/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import type { FormValues } from "@/app/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/app/lib/types";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center w-full sm:w-96 min-h-5/6 md:rounded-2xl p-3 md:p-8 border-2 border-slate-800">
        <h1 className="mt-4 text-4xl font-bold">
          <span className="underline underline-offset-4 decoration-cyan-400 ">
            Create
          </span>{" "}
          your account
        </h1>

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
      </div>
    </main>
  );
}
