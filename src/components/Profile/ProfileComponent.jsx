import { Home, Logout } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileComponent = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };
  const handleLogout = () => {
    localStorage.removeItem("Login");
    window.open("http://localhost:8080/auth/logout", "_self");
    navigate("/home");
  };

  const checkUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/auth/user", {
        withCredentials: true,
      });

      const data = response.data;

      if (data.isAuthenticated) {
        setIsAuthenticated(true);
        setUser(data.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    finally {
      // Set loading state to false after the request completes
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

 // Display loading state while checking user authentication
 if (isLoading) {
  return <div>Loading...</div>;
}

// Redirect if not authenticated
if (!isAuthenticated) {
  navigate('/login');
  return null;
}

console.log(user);

  return (
    <div className="flex items-center justify-center bg- h-screen">
      <div
        className="nav absolute z-10 left-[1%] top-[0.1%] text-[2.5rem]"
        onClick={handleHomeClick}>
        <div className="back">
          <Home />
        </div>
      </div>
      <div
        className="nav absolute z-10 right-[2.5%] top-[1%] "
        onClick={handleLogout}>
        <div className="back">
          <div className="bg-red-600 w-14 h-7 shadow-xl text-white text-center font-semibold cursor-pointer rounded-lg ">
            LogOut
          </div>
        </div>
      </div>
      <div className="max-w-md bg-white shadow-2xl justify-center flex flex-col items-center rounded-lg overflow-hidden">
        <img
          className="s h-48 w-48 rounded-full  object-cover"
          src={user.image}
          alt="Profile"
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">{user.displayName}</h2>
          <p className="text-gray-600">
           {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
