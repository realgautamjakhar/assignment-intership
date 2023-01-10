import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBuckets } from "../features/bucketSlice";
import Loader from "./Loader";

const BucketList = () => {
  const dispatch = useDispatch();
  const buckets = useSelector((state) => state.buckets.value);
  const loading = useSelector((state) => state.buckets.loading);

  //To fetch buckets from database and add to the redux state
  useEffect(() => {
    dispatch(fetchBuckets());
  }, []);

  //To style which bucket is open
  let activeStyle = ["bg-accentGD text-white rounded-lg shadow-accent"];

  return (
    <>
      {!loading ? (
        <>
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

                    <div>
                      <p>{bucket?.name}</p>
                    </div>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BucketList;
