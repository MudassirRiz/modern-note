import React from 'react'

const InputField = () => {
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

      <div className="bg-white p-6 rounded w-80">

        <input 
          value={input}
          
          placeholder="Enter note"
          className="border p-2 w-full mb-3"
        />

        <div className="flex gap-2 justify-end">
          <button >Cancel</button>
          <button >Save</button>
        </div>

      </div>

    </div>
  )
  
}

export default InputField