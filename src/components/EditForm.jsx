import React, { useState, useEffect } from 'react';

const EditForm = ({ closeEditForm, data, setData, index }) => {

  const [input, setInput] = useState("");

  useEffect(() => {
    if (index !== null) {
      setInput(data[index]);
    }
  }, [index, data]);

  const handleSave = () => {
    const updatedData = [...data];
    updatedData[index] = input;

    if(input.trim()===""){
      alert("you're blank again")
      closeEditForm();
      return;
    }

    setData(updatedData);
    closeEditForm();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border w-full p-2 mb-4 rounded"
        />

        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>

          <button
            onClick={closeEditForm}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
