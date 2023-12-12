import React from 'react';
import { Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    localStorage.setItem('Login', 'true');
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login with Google</h2>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 text-white rounded py-2 px-4 flex items-center justify-center w-full"
        >
          <Google className="mr-2" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
