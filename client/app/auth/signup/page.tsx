"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import image from "@/public/agriculture.png";
import { User, Store, Mail, Lock } from "lucide-react";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  password: string;
  role: "user" | "vendor" | "admin";
};

export default function SignupPage() {
  const [selectedRole, setSelectedRole] = useState<"user" | "vendor" | "admin">(
    "user",
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { role: "user" },
  });

  const roleValue = watch("role");

  useEffect(() => {
    setSelectedRole(roleValue);
  }, [roleValue]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-svh w-full bg-green-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl bg-green-100 rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
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

        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Create your account
        </h2>

        <div>
          <p className="text-sm font-medium mb-2">Choose your role</p>
          <div className="flex gap-3">
            <label
              className={`flex-1 border rounded-xl p-4 cursor-pointer flex flex-col items-center gap-2 transition
              ${selectedRole === "user" ? "border-green-600 bg-green-50" : "hover:border-green-300"}`}
            >
              <User className="h-6 w-6 text-green-600" />
              <span className="text-sm font-medium">User</span>
              <input
                type="radio"
                value="user"
                {...register("role")}
                className="hidden"
              />
            </label>

            <label
              className={`flex-1 border rounded-xl p-4 cursor-pointer flex flex-col items-center gap-2 transition
              ${selectedRole === "vendor" ? "border-green-600 bg-green-50" : "hover:border-green-300"}`}
            >
              <Store className="h-6 w-6 text-green-600" />
              <span className="text-sm font-medium">Vendor</span>
              <input
                type="radio"
                value="vendor"
                {...register("role")}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              {...register("name", { required: true })}
              className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.name && (
              <span className="text-xs text-red-500">*Name is required</span>
            )}
          </div>

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
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Login
          </Link>
        </p>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500">
          © 2026 Fresh Agri. All rights reserved.
        </p>
      </div>
    </div>
  );
}
