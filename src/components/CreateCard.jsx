import React from "react";
import { useState } from "react";
import CreateCardModal from "./Modals/CreateCardModal";

const CreateCard = ({ id }) => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <CreateCardModal isOpen={isOpen} setIsOpen={setisOpen} id={id} />
      )}
      <button
        onClick={() => setisOpen(true)}
        className="text-black flex justify-center gap-4 items-center rounded-lg hover:outline-2 duration-200 hover:outline-dashed hover:origin-right ease-in-out outline-accent px-4 py-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span>Create New Card</span>
      </button>
    </>
  );
};

export default CreateCard;
