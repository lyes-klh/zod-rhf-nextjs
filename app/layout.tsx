import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Signup form with react hook form and validation with zod.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-slate-950 text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
