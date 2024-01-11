import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="mt-6 w-full h-10 rounded bg-cyan-600 font-bold text-lg hover:bg-cyan-400">
      {children}
    </button>
  );
}
