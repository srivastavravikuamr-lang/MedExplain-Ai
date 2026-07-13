import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            🩺 MedExplain AI
          </CardTitle>

          <p className="text-center text-gray-500 mt-2">
            Create your account
          </p>
        </CardHeader>

        <CardContent className="space-y-5">
          <Input
            type="text"
            placeholder="Full Name"
          />

          <Input
            type="email"
            placeholder="Email"
          />

          <Input
            type="password"
            placeholder="Password"
          />

          <Input
            type="password"
            placeholder="Confirm Password"
          />

          <Button className="w-full">
            Create Account
          </Button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}