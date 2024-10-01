"use client";

import { AuthImage } from "./components/Authtentication/AuthImage";
import { AuthForm } from "./components/Authtentication/AuthForms/AuthForm";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/auth-context";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Home() {
  // const authCtx = useContext(AuthContext);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      redirect("/Dashboard");
    }
  });

  return (
    <main className=" flex min-h-screen items-center">
      <div className="flex w-full h-full">
        <div className="w-2/3 ">
          <AuthImage />
        </div>
        <div className="w-1/3">
          <AuthForm />
        </div>
      </div>
    </main>
  );
}
