import './card.css';

export default function Card({item, toggle}){

    const toggleHandler = (e) => {
        e.preventDefault();
        toggle(item.id);
    }
    return(
        <div onClick={toggleHandler}>
                <div className={item.flag? 'card card-flag': 'card'}  style={{ backgroundImage: `url(${item.imageUrl})`}}>
                    {item.flag && 
                        <ul className='tag-list'>
                            {item.tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                            ))}
                        </ul>
                    }
                </div>
        </div>
       
    );
}