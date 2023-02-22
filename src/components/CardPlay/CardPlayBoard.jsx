import { useState } from "react"
import Card from "./Card";
import './card.css';

export default function CardPlayBoard(){
    const [cardList, setCardList] = useState([]);

    async function loadRowCards(){
        const initRowCards = [];
        for(let i = 0; i < 3; i++ ){
            initRowCards.push({
                id: '',
                tags: [],
                imageUrl: '',
                flag: false,
            })
        }
        await Promise.all(initRowCards.map(async (card)=> {
            const data = await fetch('https://api.unsplash.com/photos/random?client_id=5vCDpddFNl8_KAle_QG8LxwRFcIO0GyWO9E3KVdPOMg')
            .then(r => r.json());
            const updatedCard = {
                ...card,
                id: data.id,
                tags: data.tags,
                imageUrl: data.urls.thumb,
            };
            return updatedCard;
        }));
        return initRowCards;
    }

    const loadMoreHandler = async (e) => {
        e.preventDefault();
        const loadCards = await loadRowCards();
        setCardList((prev) => [...prev, ...loadCards]);
    }

    const toggleCard = (id) => {
        setCardList((currentArray) => {
            const updateIndex = currentArray.findIndex((item) => item.id === id);
            const updatedArray = [...currentArray];
            const currentFlag = updatedArray[updateIndex].flag;
            updatedArray[updateIndex].flag = !currentFlag;
            return updatedArray;
        })
    }

    return(
        <div>
            <div className="card-board">
                {cardList.map((item) => (
                    <Card item={item} toggle={toggleCard}/>
                ))}
            </div>
            <button onClick={loadMoreHandler}>Load More</button>
        </div>
        
    )
}