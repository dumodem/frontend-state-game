
import React, { useState } from 'react';

export const StagesContext = React.createContext({
  stages: [],
  moveItemToNext: (i, item, stage) => {},
  addNewItem: (item) => {},
});


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const [stages, setStages] = useState([
    {
        seq: 0,
        stageName: "Idea", 
        items:[], 
      },
      {
        seq: 1,
        stageName: "Development", 
        items:[], 
      },
      {
        seq: 2,
        stageName: "Testing", 
        items:[], 
      },
      {
        seq: 3,
        stageName: "Deployment", 
        items:[], 
      },
  ]);

  const moveItemToNextSeq = (item, stage) => {
    console.log(item, stage);
    setStages(currentStages => {
      const curIndex = currentStages.findIndex(s => s.seq === stage.seq);
      const newItemsOfCurrentStage = [...stage.items];
      const itemIndex = newItemsOfCurrentStage.findIndex(i => i === item);
      newItemsOfCurrentStage.splice(itemIndex,1);
      const updatedStages = [...currentStages];
      updatedStages[curIndex] = {
        ...currentStages[curIndex],
        items: newItemsOfCurrentStage
      };
      const toNextSeq = stage.seq + 1;
      const nextIndex = currentStages.findIndex(s => s.seq === toNextSeq);
      if(currentStages[nextIndex]) {
        const itemsOfNext = currentStages[nextIndex].items;
        updatedStages[nextIndex] = {
          ...currentStages[nextIndex],
          items: [...itemsOfNext, item]
        }
      }
      return updatedStages;
    })
    
    
  }

  const addNewItem = (seq, item) => {
    setStages(currentStages => {
      const sIndex = stages.findIndex(s => s.seq === seq);
      const updatedStages = [...currentStages];
      const oldItems = currentStages[sIndex].items;
      updatedStages[sIndex] = {
        ...currentStages[sIndex],
        items: [...oldItems, item], 
      };
      return updatedStages;
    })
    
    
  }

  return (
    <StagesContext.Provider
      value={{ stages: stages, moveItemToNext: moveItemToNextSeq, addNewItem: addNewItem }}
    >
      {props.children}
    </StagesContext.Provider>
  );
};
