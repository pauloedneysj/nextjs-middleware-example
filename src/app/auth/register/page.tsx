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

export default function Register() {
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col items-center justify-center gap-2">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Create new account</CardTitle>
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
                <Label htmlFor="firstname">Firstname</Label>
                <Input id="firstname" placeholder="Firstname" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastname">Lastname</Label>
                <Input id="lastname" placeholder="Lastname" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="nickname">Nickname</Label>
                <Input id="nickname" placeholder="Nickname" />
              </div>
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
          <Button className="w-full" onClick={handleSubmit}>
            Enter
          </Button>
          Or
          <Button className="w-full" variant="link">
            <Link href="/auth/login">Return</Link>
          </Button>
        </CardFooter>
      </Card>
      <div className="text-md text-zinc-600">© 2022–2023 CallMe</div>
    </div>
  );
}
