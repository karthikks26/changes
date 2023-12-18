import React from "react";

const ActivityModal = ({ isOpen, onClose, selectedActivity }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0  left-0 w-full h-full flex items-center justify-center flex-col">
      <div className=" bg-slate-200 rounded-t-lg flex flex-row gap-5 p-5 w-70 relative">
        <img
          className="w-1/2 h-full"
          src={selectedActivity.img}
          alt={selectedActivity.title}
        />

        <div className="w-1/2 h-full p-5 flex flex-col items-center gap-2 justify-center">
          <h2 className="text-center font-medium">{selectedActivity.title}</h2>
          <p className="justify">{selectedActivity.description}</p>
          <p>{selectedActivity.price}</p>
          <div>
            <button className=" rounded py-2 px-5 bg-sky-700 text-white">
              Add to Cart
            </button>
          </div>
          <button className="w-full rounded py-2 px-5 bg-sky-700 text-white">
            Buy it Now
          </button>
        </div>
      </div>
      <div className="w-70 bg-slate-200 flex items-center justify-center rounded-b-lg pb-2">
        <button
          className="rounded py-2 px-5 bg-sky-700 text-white "
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ActivityModal;
