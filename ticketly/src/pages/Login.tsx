import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/forms/LoginForm";

const Login = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <Card className=" w-96  ">
        <CardHeader>
          <CardTitle className=" text-xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
