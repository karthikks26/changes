import React from "react";
// import Modal from "react-modal";
// import ReactDOM from "react-dom";

// Modal.setAppElement("#root");
const CartModal = ({ selectedRooms, onClose }) => {
  // const getTotalCost = () => {
  //   // Calculate the total cost based on the selected rooms
  //   // You may want to replace this with your actual pricing logic
  //   const costPerRoom = 50; // Replace with your actual cost per room
  //   return selectedRooms.length * costPerRoom;
  // };

  // return (
  //   <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Cart Modal">
  //     <h2>Selected Rooms</h2>
  //     <ul>
  //       {selectedRooms.map((roomId) => (
  //         <li key={roomId}>Room ID: {roomId}</li>
  //       ))}
  //     </ul>
  //     <p>Total Cost: ${getTotalCost()}</p>
  //     <button onClick={onClose}>Close</button>
  //   </Modal>
  // );
  console.log(selectedRooms);
  // const totalCost = selectedRooms.reduce((acc, room) => { return acc + room.price),0}

  // const totalCost = selectedRooms.reduce((acc, room) => {
  //   console.log("room.price:", room.price);
  //   return acc + room.price;
  // }, 0);

  const totalCost = selectedRooms.reduce((acc, room) => {
    // console.log("room.price:", room.price);
    console.log("acc:", acc);

    const roomPrice = parseFloat(room.price); // Ensure that room.price is a number
    // console.log("roomPrice:", roomPrice);

    if (!isNaN(roomPrice)) {
      return acc + roomPrice;
    } else {
      // Handle non-numeric values or missing price property
      console.warn(`Invalid room price for room with id ${room.id}`);
      return acc;
    }
  }, 0);

  // console.log("Total Cost:", totalCost);
  // console.log(totalCost);
  return (
    <div className="fixed inset-0  opacity-75 z-10 flex justify-center items-center">
      <div className="bg-white rounded-md p-4 shadow-lg">
        <h2 className="text-xl font-bold">Selected Rooms</h2>
        <ul>
          {selectedRooms.map((room) => (
            <li key={room.id}>
              {room.title} - ₹{room.price}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-bold">Total Cost: ₹{totalCost}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="rounded-md px-3 py-1 bg-gray-300 hover:bg-gray-400 mr-2"
          >
            Close
          </button>
          <button className="rounded-md px-3 py-1 bg-red-400 text-white hover:bg-red-500">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
