import { SignUp } from "@clerk/nextjs";

import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us and start learning today
          </p>
        </div>

        <SignUp />

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button className="font-medium text-purple-600 hover:text-purple-500">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
