import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './Skeletoncard.css'
const Skeletoncard = () => {
  return (
    <>
      <div className="skeleton-container mr-4">
        <Skeleton height={250} width={300} count={1} className="skeleton custom-shimmer-line" />
  <div className="flex gap-14">
        <Skeleton height={20} width={120} count={1} className="skeleton  custom-shimmer-line" />
        <Skeleton height={20} width={120} count={1} className="skeleton  custom-shimmer-line" />
  </div>
        <Skeleton height={20} width={150} count={1} className="skeleton  custom-shimmer-line" />
        <Skeleton height={20} width={200} count={1} className="skeleton custom-shimmer-line" />
      </div>
    </>
  );
};

export default Skeletoncard;
