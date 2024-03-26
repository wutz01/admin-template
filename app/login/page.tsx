import LoginForm from "@/components/login/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="lg:w-96 lg:h-96 w-full h-full text-center">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </CardTitle>
          <CardDescription>Welcome to [Company]</CardDescription>
        </CardHeader>
        <CardContent className="text-left">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  )
}
