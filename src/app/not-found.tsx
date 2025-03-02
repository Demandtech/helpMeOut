"use client";

import routes from "@/configs/routes";
import Link from "next/link";

export default function GlobalError() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">404 - Page Not Found</h1>
      <p className="text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href={routes.home}
        className="mt-4 rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
      >
        Go Home
      </Link>
    </div>
  );
}
