import { buttonVariants } from "@/components/ui/button";
import logo from "@/public/logo.png";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center ">
      <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute left-4 top-4 ",
        })}
      >
        <ArrowLeftIcon />
        back
      </Link>
      <Link
        href="/"
        className="flex items-center  self-center font-semibold text-lg text-gray-800 dark:text-white hover:opacity-80 transition"
      >
        <Image
          src={logo}
          alt="Al-jebal logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span>AL-Jebali LMS</span>
      </Link>
      <div className="flex w-full max-w-sm flex-col gap-6">{children}</div>
      <div className="mt-6 text-balance text-center text-xs text-muted-foreground px-6 ">
        By Clicking continue, you agree to our{" "} &copy;
        <span className="hover:underline">Terms of service </span>and{" "}
        <span className="hover:underline">privacy policy</span>.
      </div>
    </div>
  );
};

export default AuthLayout;
