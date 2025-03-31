'use client';

import { TextArea, TextField } from "@radix-ui/themes"; // Importing from @radix-ui/themes
import React, { useState } from "react";

const NewIssuePage: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  // Event handler for input change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title); // For now, print the title on submit
    setTitle(""); // Clear the input field after submission
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-gray-50 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-2 text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title of your issue"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Field (TextArea) */}
        <div>
          <label htmlFor="description" className="block text-lg font-semibold mb-2 text-gray-700">
            Description
          </label>
          <TextArea
            id="description"
            placeholder="Enter a detailed description"
            className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full p-3 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit New Issue
          </button>
        </div>
      </form>

      {/* Optionally display the current value of the input */}
      {title && <p className="text-sm text-gray-600 mt-4">Current Title: {title}</p>}
    </div>
  );
};

export default NewIssuePage;






