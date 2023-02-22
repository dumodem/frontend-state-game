import {useContext} from 'react';
import { StagesContext } from "../../store/stageContext";

function Item({item, stage}) {

    const moveToNext = useContext(StagesContext).moveItemToNext;
  
    const handleOnClick =() => {
        moveToNext(item, stage);
    }
    return(
        <div className="item" key={item.seq} onClick={handleOnClick}>{item}</div>
    )
}

export default Item;