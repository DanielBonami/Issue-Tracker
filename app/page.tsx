import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Optional: Add a subtle background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?technology")' }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-12 sm:py-16 lg:py-20 text-center animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 lg:mb-10 tracking-tight leading-tight animate__animated animate__fadeIn animate__delay-1s animate__slideInUp">
          Issue Tracker
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          Your journey to amazing experiences starts here. Track your issues and progress with ease.
        </p>

        {/* Main Content Area */}
        <div className="bg-gray-800 text-gray-200 p-8 rounded-lg shadow-2xl max-w-lg w-full mx-4 lg:max-w-2xl animate__animated animate__fadeIn animate__delay-3s">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center">
            Welcome to Issue Tracker
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center mb-6">
            Issue Tracker is a powerful software application that helps teams manage and track issues, bugs, feature requests, 
            and other tasks. It provides a centralized platform for reporting, prioritizing, assigning, and resolving problems 
            efficiently and effectively.
          </p>
          <div className="mt-6 text-center">
            <a 
              href="/issues" // Changed the href to "/issues"
              className="inline-block bg-purple-700 text-gray-200 py-3 px-6 rounded-full text-lg font-medium hover:bg-purple-800 transition-all transform hover:scale-105 hover:rotate-3 hover:translate-y-1 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* No footer, since you mentioned you already have one elsewhere */}
    </div>
  );
}

