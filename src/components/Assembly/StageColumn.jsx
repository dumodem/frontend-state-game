import Item from "./Item";

import "./Assembly.css";

function StageColumn({stage}){
  
  
  
  return(
    <div className='stage-column'>
      <div className='stages-title'>{stage.stageName}</div>
      {stage.items && stage.items.map((item, index) => (
        <Item item={item} stage={stage}/>
      ))}
    </div>
  )
}

export default StageColumn;