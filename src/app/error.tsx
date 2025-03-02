"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-gray-600">Please try again later.</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
      >
        Try Again
      </button>
    </div>
  );
}
