import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Skeletonicons = () => {
  const customCss = {
    overflow: 'hidden',
    background: 'linear-gradient(90deg, transparent, #ebebeb, transparent)',
    backgroundSize: '300% 100%',
    animation: 'shimmer 2s infinite linear',
  };

  return (
    <Skeleton
      height={30}
      width={30}
      count={1}
      className="skeleton custom-shimmer-line"
      style={customCss}
    />
  );
};

export default Skeletonicons;
