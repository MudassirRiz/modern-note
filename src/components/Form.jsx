import { useState } from "react";

function Form({ closeForm, data, setData, handleDate }) {
  const [input, setInputt] = useState("");

  const handleInput = (event) => {
    setInputt(event.target.value);
  };
  const AddNotewalaBtn = () => {
    if (input.trim() === "") {
        alert("You're blank")
        return;
    }

    if (data.includes(input)) {
      alert("already Exist");
      closeForm();
      return
      
    }

    setData([...data, input]);

    closeForm();
  };

  

  const stopReload = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={stopReload}>
      <div className="fixed inset-0  bg-opacity-50 backdrop-blur-md flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
          <h2 className="text-xl font-bold mb-4">New Task</h2>

          <input
            type="text"
            onChange={handleInput}
            value={input}

            placeholder="Enter name"
            className="border w-full p-2 mb-4 rounded"
          />

          <div className="flex justify-between">
            <button

            onClick={()=>{
                AddNotewalaBtn();
                handleDate();

            }}
              
              type="button"
              
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Submit
            </button>

            <button
              onClick={closeForm}
              type="button"
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
