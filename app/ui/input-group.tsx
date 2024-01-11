import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder?: string;
};

export default function InputGroup({ label, type, placeholder }: Props) {
  return (
    <div className="w-full">
      <label className="text-slate-500 text-md block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="appearance-none mt-1 w-full h-10 py-1 px-3 rounded-sm placeholder:text-slate-700 bg-slate-950 border-b-[1px] border-slate-800 outline-none focus:outline-cyan-500"
      />
    </div>
  );
}
