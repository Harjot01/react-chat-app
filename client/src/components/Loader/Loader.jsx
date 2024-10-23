import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <ClipLoader loading={true} color="#ffffff" size={50} />
    </div>
  );
};

export default Loader;
