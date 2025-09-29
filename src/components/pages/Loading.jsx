import React from "react";
import Navbar from "../Navbar";

const Loading = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </main>
    </div>
  );
};

export default Loading;
