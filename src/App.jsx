import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { CirclePlus } from "lucide-react";
import InputField from "./components/InputField";
import { use } from "react";
import Form from "./components/Form";
import EditForm from "./components/EditForm";


function App() {
  const [form, setForm] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const deleteBtn = (index) => {
    const copyData = [...data];
    copyData.splice(index, 1);
    setData(copyData);
  };

  const statusBtnClick = () => {
    alert("under development");
  };

  const handleDate = () => {
    const today = new Date().toLocaleDateString();
    setDate(today);
  };

  const editNote=(index)=>{
    setEdit(true)
    setEditIndex(index)
    
  }

  return (
    <>
      <div className=" h-screen w-full justify-between bg-gray-50 items-center flex flex-col p-6 gap-3">
        <Navbar />
        <Container
          data={data}
          setData={setData}
          statusBtnClick={statusBtnClick}
          deleteBtn={deleteBtn}
          openForm={() => setForm(true)}
          date={date}
          editNote={editNote}
        />
        {form && (
          <Form
            closeForm={() => setForm(false)}
            data={data}
            setData={setData}
            date={date}
            setDate={setDate}
            handleDate={handleDate}
          />
        )}
        {edit &&(

          <EditForm
           edit={edit} 
           setEdit={setEdit}
           editNote={editNote}
           editIndex={editIndex}
           setEditIndex={setEditIndex}
           data={data}
           setData={setData}
           index={editIndex} 
             // 🔥 naam simple rakho           
 

          closeEditForm={() => setEdit(false)}
          /> 
        )}
        </div>
    </>
  );
}

export default App;
