import React, {useState} from 'react';
import Card from '../../../components/circularProgressBarWithLabel/card/Card';
import './CardContainer.css';


const CardContainer = ({cardData})=>{

  const [clickedCards,setClickedCards] = useState(null);

  const handleBorder = (index) => {
    setClickedCards(index);
  }
    return(
        <div className="cardsContainer">
      {
        cardData.map((data, index) => (
            <div className="card" onClick={() => handleBorder (index)} key={index}>
                <Card
                  content={data.icon}
                  title={data.name}
                  borderColor={clickedCards === index ? data.border : ''}
                  backgroundColor={data.color}
                />
            </div> 
          ))
            }
        </div>
    )
}

export default CardContainer;