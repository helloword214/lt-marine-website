import React, { useState } from "react";

const UnderConstructionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open modal
  const openModal = () => setIsOpen(true);

  // Close modal
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="inline-block bg-[#FF5722] text-white font-semibold px-8 py-4 rounded-full shadow-md hover:bg-[#FF7043] transition duration-300 ease-in-out transform hover:scale-105"
      >
        Click here to check the status
      </button>

      {/* Modal Overlay and Content */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div
            className="relative w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Site Under Construction
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We are working on something amazing. Please check back later!
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-3 mt-6 text-white transition bg-red-500 rounded-full hover:bg-red-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnderConstructionModal;
