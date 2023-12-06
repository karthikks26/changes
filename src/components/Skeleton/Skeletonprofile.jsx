import React from 'react';
import Skeleton from 'react-loading-skeleton';
// import './Skeletoncard.css'
import "react-loading-skeleton/dist/skeleton.css";

let customCss = {
  overflow: 'hidden',
  background: 'linear-gradient(90deg, transparent, #ebebeb, transparent)',
  backgroundSize: '300% 100%',
  animation: 'shimmer 2s infinite linear',
};

const Skeletonprofile = () => {
  return (
    <Skeleton
      height={50}
      width={60}
      count={1}
      className="skeleton custom-shimmer-line"
      style={customCss}
    />
  );
};

export default Skeletonprofile;
