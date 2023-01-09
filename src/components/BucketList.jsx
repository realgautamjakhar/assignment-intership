import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBucket, fetchBuckets } from "../features/bucketSlice";
const BucketList = () => {
  const dispatch = useDispatch();
  const buckets = useSelector((state) => state.buckets.value); //fetching all the bucket list in the state

  useEffect(() => {
    dispatch(fetchBuckets());
  }, []);

  function handleBucketDelete(bucket) {
    dispatch(deleteBucket({ id: bucket.id }));
    console.log("Deleting bucket item");
  }
  let activeStyle = ["bg-accentGD text-white rounded-lg shadow-accent"];

  return (
    <ul className="grid gap-8">
      {buckets?.map((bucket, index) => {
        return (
          <NavLink
            to={`/bucket/${bucket?.id}`}
            className={({ isActive }) =>
              isActive ? activeStyle : "text-black shadow-neu bg-white"
            }
            key={index}
          >
            <li className="rounded-lg  py-6 px-4 text-center items-center gap-4 flex justify-between">
              <div className=" group">
                <button className=" group-hover:hidden">
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
                </button>
                <button
                  className=" group-hover:block hidden"
                  onClick={() => handleBucketDelete(bucket)}
                  title="Delete"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <p>{bucket?.name}</p>
              </div>
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
};

export default BucketList;
