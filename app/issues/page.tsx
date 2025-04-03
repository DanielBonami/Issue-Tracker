import React from 'react';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const IssuesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-black to-gray-900">
      {/* Main Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-white px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">Welcome</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Track, manage, and resolve issues efficiently. Click below to create a new issue and get started!
          </p>
        </div>

        {/* New Issue Button */}
        <div className="flex justify-center">
          <Button className="bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-700 transition-all transform hover:scale-105">
            <Link href="/issues/new" className="text-white">
              New Issue
            </Link>
          </Button>
        </div>
      </main>
      
      {/* This ensures the page stretches to the full height */}
      <footer className="mt-auto">
        {/* Footer Content, if any, will be here */}
      </footer>
    </div>
  );
};

export default IssuesPage;