import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="room-card mt-4 ml-12 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <span className="font-bold mr-1 text-black text-xl">₹11,897 </span>
        <span className="font-normal text-lg text-gray-500">night</span>
      </div>
      <div className="actions-area my-4">
        <div className="date-pickers flex w-full rounded-tl-lg rounded-tr-lg m-0 border">
          <div className="date-right w-1/2 p-3 text-sm text-left">Check In</div>
          <div className="date-left w-1/2 border-l p-3 text-sm text-left">
            CheckOut
          </div>
        </div>
        <div className="dropdown">
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-black bg-white rounded-br-lg rounded-bl-lg text-sm flex justify-between px-5 py-3 text-center border mb-4 mt-0 w-full"
            type="button">
            Guest{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdownHover"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Guest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/checkout">
      <button
        type="button"
        className="change-dates flex justify-center text-center font-semibold rounded-lg border border-transparent w-full">
        Change dates
      </button>
      </Link>
    </div>
  );
};

export default Card;
