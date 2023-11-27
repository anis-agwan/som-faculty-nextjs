import Image from "next/image";
import { AuthImage } from "./components/Authtentication/AuthImage";
import { AuthForm } from "./components/Authtentication/AuthForms/AuthForm";

export default function Home() {
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
