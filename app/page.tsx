import { lusitana } from "@/app/ui/fonts";
import Form from "@/app/ui/form";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center w-full sm:w-96 min-h-5/6 md:rounded-2xl p-3 md:p-8 border-2 border-slate-800 shadow-md shadow-cyan-500/20">
        <h1 className={`${lusitana.className} mt-2 text-4xl font-bold`}>
          <span className="underline underline-offset-4 decoration-cyan-400 ">
            Create
          </span>{" "}
          your account
        </h1>

        <Form />
      </div>
    </main>
  );
}
