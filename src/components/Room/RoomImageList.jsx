import * as React from "react";
import IosShareSharpIcon from "@mui/icons-material/IosShareSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";

export default function RoomImageList() {
  return (
    <>
      {/* ------------------  room/place heading ------------------  */}
      <div className="room-heading  flex justify-between align-middle mt-[4.5rem] mb-8 sm:w-auto w-[80vw] mx-1">
        <h1 className="sm:text-2xl text-lg sm:font-semibold font-medium">
          Beautiful 4 BHK villa Mountain view,Swimming pool
        </h1>
        <div className="share-btn flex gap-x-4 text-sm items-center">
          <div className="share flex items-center">
            <IosShareSharpIcon
              className="text-xs"
              style={{ fontSize: "18px" }}
            />
            <span className="ml-1 underline">Share</span>
          </div>
          <div className="save flex items-center">
            <FavoriteBorderSharpIcon
              className="text-xs"
              style={{ fontSize: "18px" }}
            />
            <span className="ml-1 underline">Save</span>
          </div>
        </div>
      </div>

      {/* ------------------  room/place image gallery ------------------  */}
      <div className="imggallery sm:h-[55vh] h-auto sm:w-auto w-[90vw]">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full mx-1">
          <div className="col-span-2 row-span-2">
            <img
              className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-855668970469413787/original/d6132e5d-c9b4-495d-b400-060019d50c2a.jpeg?im_w=960"
              alt=""
            />
          </div>
          <div className="col-start-3">
            <img
              className="w-full h-full object-cover"
              src="https://a0.muscache.com/im/pictures/8daebf64-1591-4e32-b7df-b4297f585381.jpg?im_w=720"
              alt=""
            />
          </div>
          <div className="col-start-4">
            <img
              className="w-full h-full object-cover  rounded-tr-xl "
              src="https://a0.muscache.com/im/pictures/4ee98f0f-73df-41fe-8006-4484413a1249.jpg?im_w=720"
              alt=""
            />
          </div>
          <div className="col-start-3 row-start-2">
            <img
              className="w-full h-full object-cover"
              src="https://a0.muscache.com/im/pictures/dbbab7f7-c01c-4802-9ad9-f87def795edc.jpg?im_w=720"
              alt=""
            />
          </div>
          <div className="col-start-4 row-start-2">
            <img
              className="w-full h-full object-cover rounded-br-xl"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-855668970469413787/original/15a0762f-b9ca-40a1-b596-900e9450d181.jpeg?im_w=720"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
