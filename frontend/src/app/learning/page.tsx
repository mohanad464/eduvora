"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfileCard = () => {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  // Add useEffect to handle the redirect
  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/login');
    }
  }, [isLoaded, user, router]);

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  // If user is not authenticated, return null since we're handling redirect in useEffect
  if (!user) {
    return null;
  }

  // Show profile content only when user is signed in
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Title</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  MERN Stack Course
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">John</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Categorie</dt>
                <dd className="text-gray-700 sm:col-span-2">Programming</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Price</dt>
                <dd className="text-gray-700 sm:col-span-2">EGP 1800</dd>
              </div>
              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Bio</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Web Development courses teach fundamental skills for creating
                  and maintaining websites. They cover topics like building
                  engaging and functional sites, web design principles, and
                  UX/UI design, which are essential for careers in web design,
                  development, and UX/UI
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;