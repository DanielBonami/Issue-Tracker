// app/api/issues/route.ts
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  try {
    // Get data from the request body
    const { title, description } = await req.json();

    // Handle creating the issue (e.g., save to a database or an in-memory store)
    // Here we're just responding with a success message as an example
    return NextResponse.json({ message: 'Issue created successfully!' }, { status: 200 });
  } catch (error: unknown) {
    // Type guard to check if error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Failed to create issue', error: error.message }, { status: 500 });
    }

    // Fallback if error is not an instance of Error
    return NextResponse.json({ message: 'Failed to create issue', error: 'Unknown error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  // Example of handling GET requests if needed
  return NextResponse.json({ message: 'GET request to issues' }, { status: 200 });
}

