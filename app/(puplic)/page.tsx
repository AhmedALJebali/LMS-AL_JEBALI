import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Award, BookOpen, Briefcase, Globe } from "lucide-react";

import { headers } from "next/headers";
import Link from "next/link";
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
const features: Feature[] = [
  {
    title: "Flexible Learning",
    description:
      "Study anytime and anywhere with courses designed to fit your lifestyle and pace.",
    icon: <Globe />,
  },
  {
    title: "Practical Knowledge",
    description:
      "Learn skills you can apply immediately through hands-on projects and real examples.",
    icon: <BookOpen />,
  },
  {
    title: "Recognized Certificates",
    description:
      "Get certificates that showcase your expertise and strengthen your professional profile.",
    icon: <Award />,
  },
  {
    title: "Career Growth",
    description:
      "Boost your career prospects by gaining in-demand skills that employers are looking for.",
    icon: <Briefcase />,
  },
];
export default async function Home() {

  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center space-y-8">
          <Badge variant="outline">The future of Online Education</Badge>{" "}
          <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
            Elevate Your Online Learning Journey
          </h1>
          <p className="max-w-[700px] text-muted-foreground text-center">
            Discover a new way to Learning that inspires creativity and growth,
            Unlock your potential with tools, guidance, and endless
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/course"
            >
              Explore Courses
            </Link>{" "}
            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </>
  );
}
