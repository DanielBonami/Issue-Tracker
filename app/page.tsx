import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/1600x900/?technology")',
        }}
      ></div>

      {/* Foreground Content */}
      <main className="relative z-10 flex flex-col items-center text-center max-w-screen-lg w-full space-y-6 sm:space-y-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          Issue Tracker
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed">
          Your journey to amazing experiences starts here. Track your issues and progress with ease.
        </p>

        {/* Info Box */}
        <section className="bg-gray-800 text-gray-200 p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Welcome to Issue Tracker
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4">
            Issue Tracker is a powerful tool that helps teams manage and track issues, bugs, and feature requests efficiently.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="/issues"
              className="inline-block bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-full text-sm sm:text-base font-medium transition-all transform hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

