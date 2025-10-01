"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader2, SendIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

const VerifyRequestPage = () => {
  const [otp, setOtp] = useState("");
  const [pending, pendingTransition] = useTransition();
  const params = useSearchParams();
  const router = useRouter();
  const verifyOTP = () => {
    pendingTransition(async () => {
      const { data, error } = await authClient.signIn.emailOtp({
        email: params.get("email") as string,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success(
              "Successfully verified your account , you will be redirected to home page..."
            );
            router.push("/");
          },
          onError: (error) => {
            toast.error(error.error.statusText);
          },
        },
      });
    });
  };
  return (
    <Card className=" w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please Check Your Email</CardTitle>
        <CardDescription>
          We have sent a vervification code to your email. Please check your
          email and enter the code below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            value={otp}
            onChange={(value) => {
              setOtp(value);
            }}
            maxLength={6}
            className="gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>{" "}
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-center text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <Button className="w-full" onClick={verifyOTP} disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Loading...
            </>
          ) : (
            <>
              <SendIcon className="size-4" />
              Verify Account
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default VerifyRequestPage;
