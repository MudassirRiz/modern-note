import React from "react";
import { CirclePlus } from "lucide-react";

const Set1 = ({openForm}) => {

  

  
  return (
    <>
      <div className="h-20 w-full mt-10 flex  justify-between items-center">
        <div className="w-40 h-20  text-black text-3xl flex justify-center items-center font-semibold tracking-wider">
          Tasks
        </div>
        <div className="w-36 h-10 mr-10 flex justify-center items-center rounded-lg bg-green-600 hover:bg-green-700 active:scale-95 transition text-white text-lg gap-2">
          <button onClick={openForm}>Add Note</button>
          <CirclePlus strokeWidth={1.5} color="white" size={16} />
        </div>
        
      </div>
          
    </>
  );
};

export default Set1;
