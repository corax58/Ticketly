import { useAuth } from "@/hooks/useAuth";
import { signupSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Link } from "react-router";
import { Button } from "../ui/button";

const SignupForm = () => {
  const { isLoading, error, isError, signup, isSuccess } = useAuth();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    await signup(values);
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("Welcome");
    }
    if (isError) {
      toast.error(error);
    }
  }, [isSuccess, isError]);

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" flex gap-1">
            <p>Already have an Account? </p>
            <Link to={"/signup"} className="font-semibold hover:underline">
              Login
            </Link>
          </div>
          <Button type="submit">
            {isLoading ? "loading..." : "Create an account"}
          </Button>
        </form>
        <p></p>
      </Form>
    </div>
  );
};

export default SignupForm;
