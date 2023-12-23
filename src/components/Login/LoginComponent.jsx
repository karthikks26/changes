import React from "react";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      window.open("http://localhost:8080/auth/google/callback","_self")
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100 ">
      <div className="bg-white p-8 rounded-lg shadow-2xl sm:w-96 w-[80vw] ">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Login with Google
        </h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 text-white rounded py-2 px-4 flex items-center justify-center w-full">
          <Google className="mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
