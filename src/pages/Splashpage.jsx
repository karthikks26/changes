import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Splashscreen from '../components/Splashscreen/Splashscreen';

const Splashpage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect is called');
    const timer = setTimeout(() => {
      console.log('Navigating to /home...');
      navigate('/home');
    }, 2500);

    return () => {
      console.log('Cleanup function is called');
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <Splashscreen />
    </>
  );
};

export default Splashpage;
