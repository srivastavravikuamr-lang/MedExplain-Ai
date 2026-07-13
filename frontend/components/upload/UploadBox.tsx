"use client";

import { useRef, useState } from "react";
import { Upload } from "lucide-react";

export default function UploadBox() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8">

      <h1 className="text-3xl font-bold text-center">
        🩺 Upload Blood Report
      </h1>

      <p className="text-center text-gray-500 mt-2">
        Upload your blood test report for AI analysis.
      </p>

      <div className="border-2 border-dashed rounded-xl p-12 mt-8 text-center">

        <Upload
          size={60}
          className="mx-auto text-blue-600"
        />

        <h2 className="text-xl font-semibold mt-4">
          Drag & Drop Report
        </h2>

        <p className="text-gray-500 mt-2">
          PDF • JPG • PNG
        </p>

        <button
          onClick={handleChooseFile}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-700 transition"
        >
          Choose File
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          className="hidden"
          onChange={handleFileChange}
        />

      </div>

      {selectedFile && (
        <div className="mt-8 border rounded-lg p-5">

          <h2 className="font-bold text-lg">
            Selected File
          </h2>

          <p className="mt-2">
            📄 {selectedFile.name}
          </p>

          <p>
            Type: {selectedFile.type}
          </p>

          <p>
            Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>

        </div>
      )}

    </div>
  );
}