'use client';

import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import axios from 'axios';
import "easymde/dist/easymde.min.css"; // Import the required CSS
import React, { useState } from "react";

// Dynamically import SimpleMDE with ssr: false
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage: React.FC = () => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IssueForm>();
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Event handler for markdown editor change
  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  // Handle form submission
  const onSubmit = async (data: IssueForm) => {
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Send the data to the server via axios
      const response = await axios.post('/api/issues', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log("Response:", response.data); // Log the response data for debugging
      setSuccessMessage("Issue submitted successfully!");
      reset(); // Reset the form after submission
    } catch (error: any) {
      // Check if the error has a response object
      if (axios.isAxiosError(error)) {
        // If the error is an Axios error, check for a response object
        if (error.response) {
          console.error("Error Response:", error.response); // Log the full error response for debugging
          setErrorMessage(error.response?.data?.message || "Failed to submit the issue. Please try again.");
        } else {
          // If there is no response (network error or timeout)
          console.error("Axios Error (No Response):", error.message); // Log the Axios error message
          setErrorMessage("Network error or timeout. Please check your internet connection and try again.");
        }
      } else {
        // If the error is not an Axios error (e.g., a different kind of error)
        console.error("General Error:", error); // Log the general error for debugging
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-gray-50 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-2 text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title of your issue"
            {...register("title", { required: "Title is required" })}
            className={`w-full p-3 text-sm border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
        </div>

        {/* Markdown Description Field */}
        <div>
          <label htmlFor="description" className="block text-lg font-semibold mb-2 text-gray-700">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            defaultValue={description}
            render={({ field }) => (
              <SimpleMDE
                {...field}
                onChange={handleDescriptionChange}
                options={{
                  placeholder: "Enter a detailed description in Markdown",
                  spellChecker: false,
                  autofocus: true,
                }}
                className="w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isLoading ? 'Submitting...' : 'Submit New Issue'}
          </button>
        </div>
      </form>

      {/* Display success or error message in callout boxes */}
      {successMessage && (
        <div className="mt-4 p-4 border border-green-500 bg-green-100 text-green-700 rounded-md">
          <strong>Success: </strong>{successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-4 border border-red-500 bg-red-100 text-red-700 rounded-md">
          <strong>Error: </strong>{errorMessage}
        </div>
      )}

      {/* Optionally display the current value of the input */}
      {description && <p className="text-sm text-gray-600 mt-4">Current Description: {description}</p>}
    </div>
  );
};

export default NewIssuePage;















