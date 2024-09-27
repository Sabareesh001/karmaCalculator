import Card from '../../../components/circularProgressBarWithLabel/card/Card';
import './CardContainer.css';


const CardContainer = ({cardData})=>{
    return(
        <div className="cardsContainer">
      {
        cardData.map((data) => (
            <div className="card">
                <Card
                  content={data.icon}
                  title={data.name}
                  borderColor={data.border}
                  backgroundColor={data.color}
                />
            </div> 
          ))
            }
        </div>
    )
}

export default CardContainer;