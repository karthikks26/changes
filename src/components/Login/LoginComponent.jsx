import React from "react";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import mainlogo from "../../assets/ayatriologo.png";
import axios from "axios";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      window.open("http://localhost:8080/auth/google/callback", "_self")
    } catch (error) { }
  };

  return (
    <div className="flex items-center transform translate-y-14 justify-center">




      <div className="bg-white">
        <div className='img__con111'>
          <img src={mainlogo} alt="logo" className="w-48 m-2" />
        </div>

        <div style={{ margin: "0px auto 18px", width: "100%" }}>
          <h3
            style={{
              color: "rgb(0, 0, 0)",
              fontSize: "30px",
              fontWeight: "600",
              letterSpacing: "-1.2px",
              fontFamily: "inherit",
              wordBreak: "break-word",
            }}
          >
            Wellcome To Ayatrio Family Profile
          </h3>
          <div className='Modal_subtitle'>
            Become a member of Ayatrio Family today. It's free to join? Get the details.
          </div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-500 text-white rounded-full py-2 px-4 flex items-center justify-center w-full">
          <Google className="mr-2" />
          Login with Google
        </button>

      </div>
    </div>
  );
};

export default LoginComponent;
