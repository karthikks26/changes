import React,{useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import ProductPage from "./pages/ProductPage";
import MagazinePage from "./pages/MagazinePage";
import RoomPage from "./pages/RoomPage";
import CheckoutPage from "./pages/CheckoutPage";
import { FormProvider } from "./components/Checkoutcomp/FormContext";
import Shipping from "./pages/Shipping";
import Paymentpage from "./pages/Paymentpage";
import Virtualexperiance from "./pages/Virtualexperiance";
import Splashpage from './pages/Splashpage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

function App() {

  const [deviceId,setDeviceId] = useState(null)

  const generateDeviceId = ()=> {
    const existingDeviceId = localStorage.getItem("deviceId");
    if(existingDeviceId){
      setDeviceId(existingDeviceId);
    }else{
      const navigatorInfo = `${navigator.userAgent}${navigator.language}${navigator.platform}`;
      const hash = btoa(navigatorInfo);
      setDeviceId(hash);
      localStorage.setItem("deviceid", deviceId);
    }
  }

  useEffect(()=>{
    generateDeviceId();
  },[])
  
  console.log("Device ID:", deviceId);
  return (
    <>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Splashpage />} />
          <Route path='/home' element={<HomePage/>}/>
          <Route path="/ayatrio-map" element={<MapPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/rooms" element={<RoomPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/payment' element={<Paymentpage />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path ='/profile' element={<ProfilePage/>}/>
          <Route path='/virtualexperience/*' element={<Virtualexperiance />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path='/cart' element={<CartPage/>}/> 
        </Routes>
      </FormProvider>
    </> 
  );
}

export default App;
