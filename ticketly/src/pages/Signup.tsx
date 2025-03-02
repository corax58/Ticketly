import SignupForm from "@/components/forms/SignupForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Signup = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <Card className=" w-96  shad">
        <CardHeader>
          <CardTitle className=" text-xl font-bold">Sign up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
