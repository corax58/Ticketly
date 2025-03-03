import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { loginSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const LoginForm = () => {
  const { isLoading, error, isError, login, isSuccess } = useAuth();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    await login(values);
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
            <p>Don't have an Account? </p>
            <Link to={"/signup"} className="font-semibold hover:underline">
              Sign up
            </Link>
          </div>
          <Button type="submit">{isLoading ? "loading..." : "Login"}</Button>
        </form>
        <p></p>
      </Form>
    </div>
  );
};

export default LoginForm;
