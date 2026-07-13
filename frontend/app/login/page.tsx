import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            🩺 MedExplain AI
          </CardTitle>

          <p className="text-center text-gray-500 mt-2">
            Sign in to continue
          </p>
        </CardHeader>

        <CardContent className="space-y-5">

          <Input
            type="email"
            placeholder="Enter your email"
          />

          <Input
            type="password"
            placeholder="Enter your password"
          />

          <Button className="w-full">
            Login
          </Button>

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>

        </CardContent>
      </Card>
    </main>
  );
}