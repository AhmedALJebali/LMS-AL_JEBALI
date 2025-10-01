"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { GithubIcon, Loader, Loader2, SendIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [githubPending, githubPendingTransition] = useTransition();
  const router = useRouter();
  const [emailPending, EmailPendingTransition] = useTransition();
  const [email, setEmail] = useState<string>("");
  const signInWithEmail = () => {
    EmailPendingTransition(async () => {
      const { data, error } = await authClient.emailOtp.sendVerificationOtp({
        email: email,
        type: "sign-in",

        fetchOptions: {
          onSuccess: () => {
            toast.success(
              "Successfully sent OTP to your email , you will be redirected to home page..."
            );
            router.push(`/verify-request?email=${email}`);
          },
          onError: (error) => {
            toast.error(error.error.statusText);
          },
        },
      });
    });
  };
  const signInWithGithub = () => {
    githubPendingTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success(
              "Successfully signed in with Github , you will be redirected to home page..."
            );
          },
          onError: (error) => {
            toast.error(error.error.statusText);
            console.log(error);
          },
        },
      });
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle> Welcome back!</CardTitle>
        <CardDescription>
          Login with your Guthub account to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {" "}
        <Button
          disabled={githubPending}
          className="w-full"
          variant="outline"
          onClick={signInWithGithub}
        >
          {githubPending ? (
            <>
              <Loader className="size-4 animate-spin" /> Loading...
            </>
          ) : (
            <>
              <GithubIcon className="size-4" />
              Sign in with Github
            </>
          )}
        </Button>
      </CardContent>
      <div
        className="relative text-center
        text-sm after:absolute after:inset-0
        after:top-1/2 after:z-0 after:flex after:items-center
       after:border-t after:border-border"
      >
        <span className="relative z-10 bg-card px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <div className="grid gap-3 px-6">
        <div className="grid gap-2">
          {" "}
          <Label htmlFor="email" className="text-center">
            Email
          </Label>
          <Input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Email@example.com"
          />
          <Button
            disabled={emailPending || !email}
            className="w-full"
            onClick={signInWithEmail}
          >
            {emailPending ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Loading...
              </>
            ) : (
              <>
                <SendIcon className="size-4" />
                Continue with Email
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LoginForm;
