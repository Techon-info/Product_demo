"use client";

import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import image from "@/public/agriculture.png";
import { Mail, Lock, Chrome } from "lucide-react";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="min-h-svh w-full bg-green-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-green-100 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <Image
              src={image}
              alt="Fresh Agri"
              fill
              priority
              className="object-contain"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-widest text-green-700">
            Fresh Agri
          </h1>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold tracking-wide text-gray-800">
          Login to your account
        </h2>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border rounded-lg py-2.5 hover:bg-gray-50 transition text-sm sm:text-base"
        >
          <Chrome className="h-5 w-5 text-gray-700" />
          Continue with Google
        </button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs sm:text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                {...register("email", { required: true })}
                className="mt-1 w-full rounded-lg border pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {errors.email && (
              <span className="text-xs text-red-500">*Email is required</span>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="password"
                {...register("password", { required: true })}
                className="mt-1 w-full rounded-lg border pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            {errors.password && (
              <span className="text-xs text-red-500">
                *Password is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2.5 font-medium tracking-wide transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          No account?{" "}
          <Link
            href="/auth/signup"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Sign up
          </Link>
        </p>

        <p className="text-center text-xs sm:text-sm text-gray-500">
          © 2026 Fresh Agri. All rights reserved.
        </p>
      </div>
    </div>
  );
}
