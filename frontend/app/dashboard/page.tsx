import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold text-blue-700">
        🩺 MedExplain AI Dashboard
      </h1>

      <p className="text-gray-600 mt-2">
        Welcome back, Ravi 👋
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <Card className="hover:shadow-xl transition">
          <CardHeader>
            <CardTitle>📄 Upload Report</CardTitle>
          </CardHeader>

          <CardContent>
            Upload a blood test report for AI analysis.
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition">
          <CardHeader>
            <CardTitle>📊 Previous Reports</CardTitle>
          </CardHeader>

          <CardContent>
            View your uploaded reports.
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition">
          <CardHeader>
            <CardTitle>🤖 AI Analysis</CardTitle>
          </CardHeader>

          <CardContent>
            Read AI-generated health explanations.
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition">
          <CardHeader>
            <CardTitle>👤 My Profile</CardTitle>
          </CardHeader>

          <CardContent>
            Manage your account settings.
          </CardContent>
        </Card>

      </div>

    </main>
  );
}