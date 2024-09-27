import { useState } from 'react';
import './Vehicles.css';

const Vehicles = ()=>{
    const [questions,setQuestions] = useState([
            {q:"Choose the vehicles you use for commuting ? "},
            {q:"How many Vehicles do you own?"},
           {q: "What type of fuel do you use?"},
           {q:"How many KM you drive per week?"}
      ])
    const [cardData, setCardData] = useState([
        [
            [{
          icon: "🚲",
          name: "Bicycle/Walk",
          color:'#EEF6FF',
          border:'#1D78EC'
        },
        {
          icon: "🛵",
          name: "Two Wheeler",
          color:'#FFF4E6',
          border:'#FFE0A1'
        },
        {
          icon: "🚗",
          name: "Car",
          color:'#FFF4F3',
          border:'#EB7E74'
        }]
    ]
      ]);
    return(
       <div>
          <div className="question">{questions[currQuestion].q}</div>
        <div className="cardsContainer">
          {cardData[currQuestion].map((data) => (
            <div className="card">
                <Card
                  content={data.icon}
                  title={data.name}
                  borderColor={data.border}
                  backgroundColor={data.color}
                />
            </div> 
          ))}
        </div>
       </div>
    )
}

export default Vehicles;