import React from 'react';
import { NextPage } from 'next';
import 'tailwindcss/tailwind.css';

const HomePage: NextPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl text-blue-500">Hello, Next.js!</h1>
    </div>
  );
}

export default HomePage;