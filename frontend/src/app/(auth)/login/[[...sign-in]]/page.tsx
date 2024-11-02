"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>

        <SignIn />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <button
              onClick={handleSignUpClick}
              className="font-medium text-purple-600 hover:text-purple-500"
            >Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
