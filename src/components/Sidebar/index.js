import React, { useState } from "react";
import './styles.css';

const Sidebar = ({ places }) => {
  const [isNavOpen, setNavOpen] = useState(true);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className={`sidebar ${isNavOpen ? "open" : ""}`}>
        <div className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <ul className="mx-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-black">
            <li className="list-group-item block w-full px-4 py-2 text-black  border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600" aria-disabled="true">
              Listed properties
            </li>

            {places.map(
              (place, index) =>
                place &&
                place.name &&
                place.photo &&
                place.photo.images &&
                place.photo.images.thumbnail && (
                  <li
                    className="list-group-item block w-full px-4 py-2 text-black  border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600 flex content-center"
                    key={index}
                  >
                    <div className="sidebar-info-image">
                      <img
                        src={place.photo.images.thumbnail.url}
                        alt={place.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <div className="property-info">
                      <div className="property-info-heading">{place.name}</div>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
        <button
          className={`toggle-btn ${isNavOpen ? "close" : "open"}`}
          onClick={toggleNav}
        >
          {isNavOpen ? (
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
