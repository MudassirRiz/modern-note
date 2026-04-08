import React from "react";

const Status = ({statusBtnClick}) => {
  return (
    <>
      <div onClick={statusBtnClick} className="h-11 w-80 bg-green-400 flex justify-center items-center  rounded-sm object-cover overflow-hidden">
        <div className="h-10 rounded-sm flex justify-center items-center w-29 hover:bg-green-700 bg-green-600  text-white overflow-hidden text-xs">Today</div>
        <div className="h-10 rounded-sm flex justify-center items-center w-29 hover:bg-green-700 text-white border-2 text-xs">Pending</div>
        <div className="h-10 w-29 rounded-sm flex justify-center items-center hover:bg-green-700 text-white text-xs">Overdue</div>
      </div>
    </>
  );
};

export default Status;
