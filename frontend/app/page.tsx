export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-7">

      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        🩺 MedExplain AI
      </h1>

      <p className="text-xl text-gray-700 text-center max-w-2xl mb-8">
        Understand your blood test reports in simple language using Artificial
        Intelligence.
      </p>

      <div className="flex gap-4">

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">
          Upload Report
        </button>

        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition">
          Learn More
        </button>

      </div>

    </main>
  );
}