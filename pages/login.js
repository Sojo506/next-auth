import React, { use } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl ">Sign In With Git Hub!</h1>
      <button
        className="bg-slate-700 text-white p-2 transition duration-200 ease-in transform hover:bg-opacity-25 text-2xl hover:text-yellow-400"
        onClick={() => router.push("/api/auth/signin")}
      >
        Git Hub
      </button>
    </div>
  );
};

export default Login;
