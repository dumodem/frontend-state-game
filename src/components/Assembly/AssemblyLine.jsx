import React, {useContext} from "react";
import StageColumn from './StageColumn';
import { StagesContext } from "../../store/stageContext";

function AssemblyLine(){
  
    const stages = useContext(StagesContext).stages;
    console.log(stages);
  return(
    <ul className="stages">
      {stages.map(stage => (
       <StageColumn key={stage.seq} stage={stage} />
      ))}
    </ul>
  )
}

export default AssemblyLine;