"use client";

import RochTextEditor from "@/components/richeditor/Editor";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Course, CourseSchema, courseCategories } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const CourseCreationpage = () => {
  const form = useForm<Course>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      category: undefined,
      fileKey: "",
      slug: "",
      level: "BEGINNER",
      status: "DRAFT",
      smallDescription: "",
      duration: 0,
    },
  });

  function onSubmit(values: Course) {
    console.log(values);
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <Link
          className={buttonVariants({ variant: "outline", size: "icon" })}
          href="/admin/courses"
        >
          <ArrowLeft className="size-4" />
        </Link>
        <h1 className="text-2xl font-bold">Create Course</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Details</CardTitle>
          <CardDescription>Provide course details</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Course title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {courseCategories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <RochTextEditor />
                      {/* <Textarea placeholder="Detailed description" {...field} /> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Small Description */}
              <FormField
                control={form.control}
                name="smallDescription"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Short description (max 200 chars)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price */}
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Price in USD"
                        className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Duration */}
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration (hours)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Course duration"
                        className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Level */}
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BEGINNER">Beginner</SelectItem>
                          <SelectItem value="INTERMEDIATE">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="ADVANCED">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DRAFT">Draft</SelectItem>
                          <SelectItem value="PUBLISHED">Published</SelectItem>
                          <SelectItem value="ARCHIVED">Archived</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Slug */}
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Unique course slug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* FileKey */}
              <FormField
                control={form.control}
                name="fileKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>{" "}
                    <FormControl>
                      <Input
                        placeholder="Thumbnail URL for the course"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className={`${buttonVariants({ variant: "default" })} sm:col-span-2`}
              >
                Save Course
              </button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseCreationpage;
