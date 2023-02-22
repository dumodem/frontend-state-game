import React, {useState, useContext} from "react";
import {StagesContext} from "../../store/stageContext";
import "./Assembly.css";

function AddItem(){
  const [inputData, setInputData] = useState({
    item:'',
  })
  
  const addNewItem = useContext(StagesContext).addNewItem;
  
  const handleChangeInput = (event) => {
    setInputData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  
     const handleOnSubmit =(event) => {
      event.preventDefault();
     const item = inputData.item;
     addNewItem(0,item);
  }
  return(
    <form onSubmit={handleOnSubmit}>
        <input name="item" onChange={handleChangeInput} /><button type="submit">save</button>
      </form>
  )
}

export default AddItem;