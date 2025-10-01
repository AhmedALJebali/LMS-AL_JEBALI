"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

export const useSignOut = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const signOut = () => {
    startTransition(() => {
      authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("Successfully signed out");
            router.push("/");
          },
          onError: () => {
            toast.error("Failed to sign out");
          },
        },
      });
    });
  };

  return { signOut, isPending };
};
