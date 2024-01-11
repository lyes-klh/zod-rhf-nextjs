"use client";

import InputGroup from "@/app/ui/input-group";
import Button from "@/app/ui/button";

export default function Home() {
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
          action=""
          className="mt-6 w-full flex flex-col items-center gap-5"
        >
          <InputGroup type="text" label="Name" placeholder="John Doe" />
          <InputGroup
            type="email"
            label="Email"
            placeholder="email@email.com"
          />
          <InputGroup type="password" label="Passwrod" placeholder="********" />
          <InputGroup
            type="password"
            label="Confirm Password"
            placeholder="********"
          />
          <Button>Submit</Button>
        </form>
      </div>
    </main>
  );
}
