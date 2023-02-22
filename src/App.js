import React, {useState} from "react";
import ReactDOM from "react-dom";
import AssemblyLine from "./components/Assembly/AssemblyLine";
 import AddItem from './components/Assembly/AddItem';
import CardPlayBoard from "./components/CardPlay/CardPlayBoard";


/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 


*/


function App(){
  
  return(
    
   <div>
      <AddItem />
      <AssemblyLine />
      <CardPlayBoard />
    </div>
  )
}

export default App;