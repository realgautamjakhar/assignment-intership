import React from "react";
import { Outlet } from "react-router-dom";
import BucketList from "../components/BucketList";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="grid grid-rows-[60px_1fr] h-screen bg-whiteGD">
      <Header />
      <main className="grid md:grid-cols-[minmax(auto,350px)_minmax(auto,1fr)] grid-rows-[300px_1fr] py-10 md:place-content-center">
        <div className="md:h-[85vh]  border-r-2 items-start pr-4 overflow-y-scroll md:grid px-4 scrollbar">
          <h2 className="text-2xl font-medium leading-6 text-black pb-4">
            Bucket List
          </h2>
          <BucketList />
        </div>
        <div className=" md:h-[85vh] h-full overflow-y-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
