import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Skeletonsearch = () => {
  const customCss = {
    overflow: 'hidden',
    background: 'linear-gradient(90deg, transparent, #ebebeb, transparent)',
    backgroundSize: '300% 100%',
    animation: 'shimmer 2s infinite linear',
  };

  return (
    <Skeleton
      height={50}
      width={300}
      count={1}
      className="skeleton custom-shimmer-line"
      style={customCss}
    />
  );
};

export default Skeletonsearch;
