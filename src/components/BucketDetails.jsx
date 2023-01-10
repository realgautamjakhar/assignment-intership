import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentBucket } from "../features/bucketSlice";
import EditBucketModal from "./Modals/EditBucketModal";

const BucketDetails = ({ id }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.buckets.loading);
  const bucket = useSelector((state) => state.buckets.current);

  useEffect(() => {
    dispatch(currentBucket({ id }));
  }, [id, loading]);

  function openBucketEdit() {
    setIsOpen(true);
  }

  return (
    <div className="w-full flex items-center justify-center">
      {IsOpen && (
        <EditBucketModal
          isOpen={IsOpen}
          setIsOpen={setIsOpen}
          bucket={bucket}
        />
      )}
      <div className=" flex items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <h2 className="text-3xl font-medium">{bucket?.name}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={openBucketEdit}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </div>
    </div>
  );
};

export default BucketDetails;
