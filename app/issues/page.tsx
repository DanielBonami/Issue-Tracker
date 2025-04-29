import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white px-4 sm:px-6 lg:px-8">
      {/* Main Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center w-full md:max-w-3xl md:mx-auto py-12 space-y-6 sm:space-y-8 md:space-y-10">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Welcome
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed text-gray-300">
            Track, manage, and resolve issues efficiently. Click below to create a new issue and get started!
          </p>
        </div>

        {/* New Issue Button */}
        <div>
          <Link href="/issues/new">
            <Button className="bg-purple-700 hover:bg-purple-800 text-white py-2 sm:py-3 px-6 rounded-full text-sm sm:text-base font-medium transition-transform hover:scale-105 active:scale-95">
              New Issue
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer Placeholder */}
      <footer className="mt-auto py-4"></footer>
    </div>
  );
};

export default IssuesPage;