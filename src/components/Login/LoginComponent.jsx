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

        <div style={{ margin: "30px auto 10px", width: "100%" }}>
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
            Wellcome to ayatrio family profile
          </h3>

        </div>
        <div className='Modal_subtitle' style={{ margin: "0px 0 38px", width: "60%" }} >
          Become a member of Ayatrio Family today. It's free to join? Get the details.
        </div>
        <button
          onClick={handleGoogleLogin}
          className="text-white bg-black text-lg rounded-full font-semibold py-3 px-4 flex items-center justify-center w-3/4">
          <Google className="mr-2" />
          Login with Google
        </button>

        <div className='gflbutton'>
          <div className='BzWZlf'>
            <div
              jsname='fmcmS'
              className='KTeGk'
              id='profileIdentifier'
            >
              {" "}
              Sign up with phone or email
            </div>
          </div>
        </div>
        <div style={{ padding: "10px" }}>
          <span className='mtp'>
            <span>
              {" "}
              By continuing, you agree to Myworld's{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                data-test-id='tos'
                href='/_/_/policy/terms-of-service/'
              >
                Terms of Service
              </a>
              ,{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                data-test-id='privacy'
                href='/_/_/policy/privacy-policy/'
              >
                Privacy policy
              </a>{" "}
              including{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                data-test-id='privacy'
              >
                {" "}
                Cookie Use{" "}
              </a>
              .{" "}
            </span>
          </span>
        </div>
        <div
          style={{
            borderBottom: "1px solid rgb(222, 222, 222)",
            margin: "10px auto",
            width: "110px",
          }}
        ></div>


      </div>


    </div>
  );
};

export default LoginComponent;
