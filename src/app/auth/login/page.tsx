"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const route = useRouter();
  const { toast } = useToast();

  return (
    <div className="w-full h-screen flex flex-col gap-8 items-center justify-center">
      <Image
        src={logo}
        alt="logo"
        priority
        className={`w-44 h-auto transition delay-75 duration-1000 ease-in-out "animate-pulse"`}
      />
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Welcome to CallMe</CardTitle>
          <CardDescription>
            CallMe is a platform to bring people together around the world,
            conversations, photos, videos and much more, the limit is your
            imagination...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 justify-between">
          <Button
            className="w-full"
            onClick={() => route.push("/")}
            disabled={false}
          >
            {false ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Enter"
            )}
          </Button>
          Or
          <Button className="w-full" variant="link">
            <Link href="/auth/register">Register</Link>
          </Button>
        </CardFooter>
      </Card>
      <div className="text-md text-zinc-600">© 2022–2023 CallMe</div>
    </div>
  );
}
