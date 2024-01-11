import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "@/app/lib/types";

type Props = {
  name: keyof FormValues;
  label: string;
  type: string;
  errorMessage: string | undefined;
  register: UseFormRegister<FormValues>;
  placeholder?: string;
};

export default function InputGroup({
  name,
  label,
  type,
  errorMessage,
  register,
  placeholder,
}: Props) {
  return (
    <div className="w-full">
      <label className="text-slate-300 text-sm block">{label}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="appearance-none mt-1 w-full h-10 py-1 px-3 rounded-sm placeholder:text-slate-700 bg-slate-950 border-b-[1px] border-slate-800 outline-none focus:outline-cyan-500"
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
