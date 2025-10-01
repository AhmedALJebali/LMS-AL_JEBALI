"use client";
import { buttonVariants } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { authClient } from "@/lib/auth-client";
import logo from "@/public/logo.png";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

const navigations = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex min-h-16 px-4 md:px-6 lg:px-8 items-center justify-between">
        {/* Logo + Title */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg text-gray-800 dark:text-white hover:opacity-80 transition"
        >
          <Image
            src={logo}
            alt="Al-jebali logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span>AL-Jebali LMS</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:items-center gap-6">
          <ul className="flex items-center gap-6">
            {navigations.map((navigation) => (
              <li key={navigation.name}>
                <Link
                  href={navigation.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-primary transition"
                >
                  {navigation.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 mr-4">
          <ThemeToggle />
          {isPending ? (
            <Loader className="transition-shadow animate-spin" />
          ) : session ? ( // لو لسه في تحميل
            // لو في session (المستخدم مسجل دخول)
            <UserDropdown
              name={session.user.name}
              email={session.user.email}
              image={session.user.image}
            />
          ) : (
            <>
              <Link
                href="/login"
                className={buttonVariants({ variant: "secondary" })}
              >
                Sign In
              </Link>
              <Link href="/login" className={buttonVariants()}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
