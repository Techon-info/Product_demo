"use client";

import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import image from "@/public/field-farm-svgrepo-com.svg";

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
    <div className="bg-green-light flex flex-col xs:gap-5 xs:py-10 items-center w-svw h-svh ">
      <h1 className="text-2xl font-semibold tracking-widest">Fresh Agri</h1>
      <div className="relative xs:w-48 xs:h-48">
        <Image src={image} alt="image" fill priority />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 items-center flex flex-col gap-3 relative"
      >
        <input
          {...register("email")}
          className="border outline-none py-1 px-3 w-full rounded-xl"
        />
        <input
          type="password"
          {...register("password")}
          className="border outline-none py-1 px-3 rounded-xl"
        />
        <button
          type="submit"
          className="px-15 py-3 absolute bg-amber-200 bottom-10 rounded-sm cursor-pointer font-light text-lg tracking-widest"
        >
          Login
        </button>
      </form>
    </div>
  );
}
