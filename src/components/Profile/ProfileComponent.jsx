import { Home, Logout } from '@mui/icons-material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProfileComponent = () => {
    let navigate = useNavigate();
    const handleHomeClick =()=>{
        navigate('/home')
    }
    const handleLogout = ()=>{
        localStorage.removeItem("Login");
        navigate('/home')
    }
  return (
    <div className="flex items-center justify-center bg- h-screen">
        <div className="nav absolute z-10 left-[1%] top-[0.1%] text-[2.5rem]" onClick={handleHomeClick}>
           <div className="back">
            <Home/>
           </div>
        </div>
        <div className="nav absolute z-10 right-[2.5%] top-[1%] " onClick={handleLogout}>
           <div className="back">
           <div className="bg-red-600 w-14 h-7 shadow-xl text-white text-center font-semibold cursor-pointer rounded-lg ">
      LogOut
            </div>
           </div>
        </div>
      <div className="max-w-md bg-white shadow-2xl justify-center flex flex-col items-center rounded-lg overflow-hidden">
        <img
          className="s h-48 w-48 rounded-full  object-cover"
          src="https://placekitten.com/800/400" 
          alt="Profile"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Ayatrio</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
