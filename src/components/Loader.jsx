import React from "react";

//Loader component render whenever app fetching data from the server
const Loader = () => {
  return (
    <div className="grid items-center justify-center">
      <img
        src="/assets/spinner.svg"
        className="max-w-10 h-10 w-full"
        alt="loader"
      />
      <p>Loading</p>
    </div>
  );
};

export default Loader;
