'use client';

import { useForm, Controller } from 'react-hook-form';
import dynamic from 'next/dynamic';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage: React.FC = () => {
  const { register, control, handleSubmit, formState: { errors }, reset, setValue } = useForm<IssueForm>({
    defaultValues: { title: "", description: "" }
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = async (data: IssueForm) => {
    setIsLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await axios.post('/api/issues', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      setSuccessMessage("Issue submitted successfully!");
      reset();
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || "Failed to submit the issue.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md sm:max-w-2xl bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">
          Create a New Issue
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter issue title"
              {...register("title", { required: "Title is required" })}
              className={`w-full p-3 text-sm sm:text-base border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
          </div>

          {/* Markdown Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <SimpleMDE
                  {...field}
                  onChange={(value) => {
                    field.onChange(value);
                    setValue("description", value); // Keep in sync
                  }}
                  options={{
                    placeholder: "Enter details in Markdown",
                    spellChecker: false,
                    status: false,
                  }}
                />
              )}
            />
            {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-sm sm:text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLoading ? "Submitting..." : "Submit New Issue"}
            </button>
          </div>
        </form>

        {/* Success & Error Messages */}
        {successMessage && (
          <div className="p-4 border border-green-500 bg-green-100 text-green-700 rounded-md text-sm sm:text-base">
            <strong>Success:</strong> {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 border border-red-500 bg-red-100 text-red-700 rounded-md text-sm sm:text-base">
            <strong>Error:</strong> {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewIssuePage;

















