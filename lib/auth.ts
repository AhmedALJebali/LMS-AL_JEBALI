import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";

import { prisma } from "./db";
import { env } from "./env";
import { resend } from "./resend";
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type = "sign-in" }) {
        if (type === "sign-in") {
          const { data, error } = await resend.emails.send({
            from: "My App <onboarding@resend.dev>",
            to: [email],
            subject: "Verify your email",
            html: `<p>Congrats tha ${otp} <strong></strong>!</p>`,
          });
          
        }
      },
      
    }),
  ],
});
