import React from "react";
import { useState } from "react";
import CreateBucketModal from "./Modals/CreateBucketModal";

const CreateBucket = () => {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      {IsOpen && <CreateBucketModal isOpen={IsOpen} setIsOpen={setIsOpen} />}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-4 text-black flex justify-center flex-col items-center rounded-lg hover:border-2 duration-200 hover:border-dashed hover:origin-right ease-in-out border-accent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span>Create New Bucket</span>
      </button>
    </>
  );
};

export default CreateBucket;
