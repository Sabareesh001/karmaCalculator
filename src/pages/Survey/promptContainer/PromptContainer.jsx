import { useEffect, useState } from "react";
import "./PromptContainer.css"
import CardContainer from "../cardContainer/CardContainer";
import SliderWithBlocks from "../../../components/circularProgressBarWithLabel/card/slider/Slider";
import { replace, useNavigate } from "react-router-dom";

const PromptContainer = ({ isLast,currStep,setIsLast,navigateNextQuestion}) => {
  const [questions] = useState([
   [ { q: "Choose the vehicles you use for commuting?" },
    { q: "How many Vehicles do you own?" },
    { q: "What type of fuel do you use?" },
    { q: "How many KM do you drive per week?" },],
    [ { q: "What you normally eat?" },],
    [
      {
        q:"Select the appliances you use at your home"
      }
    ],
    [
      {
        q:"How much electricity do you consume for a month?"
      }
    ]
  ]);

  const [stepData] = useState([
    [{
      type: "card",
      data: [
        {
          icon: "🚲",
          name: "Bicycle/Walk",
          color: "#EEF6FF",
          border: "#1D78EC",
        },
        {
          icon: "🛵",
          name: "Two Wheeler",
          color: "#FFF4E6",
          border: "#FFE0A1",
        },
        {
          icon: "🚗",
          name: "Car",
          color: "#FFF4F3",
          border: "#EB7E74",
        },
      ],
    },
    {
      type: "slider",
      data: {
        blockInterval: 2,
        start: 2,
        end: 10,
        labelText:'',
        collectionType:'vehicles'
      },
    },
    {
      type: "card",
      data: [
      
        {
          icon: "⛽",
          name: "Petrol / Diesel",
          color: "#FFF4E6",
          border: "#FFE0A1",
        },
        {
          icon: "🔌",
          name: "Electric Vehicle",
          color: "#FFF4F3",
          border: "#EB7E74",
        },
      ],
      
    },
    {
      type: "slider",
      data: {
        start: 10,
        end: 250,
        labelText:'km',
        collectionType:'km'
      },
    },],
    [{
      type: "card",
      data: [
      
        {
          icon: "🥬",
          name: "veg",
          color: "#E4FFEE",
          border: "#FFE0A1",
        },
        {
          icon: "🍢",
          name: "Both",
          color: "#FFF4F3",
          border: "#EB7E74",
        },
        {
          icon: "🍗",
          name: "Non veg",
          color: "#FFF4F3",
          border: "#EB7E74",
        },
      ],
      
    },],
    [
      {
        type: "card",
        data: [
          {
            name: "Fridge",
            color: "#EEF6FF",
            border: "#1D78EC",
          },
          {
            name: "AC",
            color: "#FFF4E6",
            border: "#FFE0A1",
          },
          {
            name: "Chimney",
            color: "#FFF4F3",
            border: "#EB7E74",
          },
          {
            name: "Washing machine",
            color: "#FFF4F3",
            border: "#EB7E74",
          },
          {
            name: "Electric vehicles",
            color: "#FFF4F3",
            border: "#EB7E74",
          },
          // {
          //   name: "Air cooler",
          //   color: "#FFF4F3",
          //   border: "#EB7E74",
          // },
          // {
          //   name: "Mixer/Grinder",
          //   color: "#FFF4F3",
          //   border: "#EB7E74",
          // },
        ],
      },
    ],
    [
      {
        type: "slider",
        data: {
          start: 100,
          end: 1000,
          labelText:'units',
          collectionType:'units'
        },
      },
    ]
  ]);
  useEffect(()=>{
    const decimalStep = Math.floor((currStep * 10) % 10);
    if((decimalStep+1)>questions[Math.floor(currStep)-1].length){
          navigateNextQuestion();
          if(isLast){
            setIsLast(false);
          }
    }
    else if(Math.floor(currStep)===questions.length){
      setIsLast(true);
    }
  },[currStep])
  const decimalStep = Math.floor((currStep * 10) % 10);
  console.log(decimalStep)
  const currentQuestion = questions[Math.floor(currStep)-1][decimalStep]?.q;
  const currentStepData = stepData[Math.floor(currStep)-1][decimalStep];

  return (
    <div className="promptContainer">
      <div className="question">{currentQuestion}</div>
      {currentStepData?.type === "card" && (
        <CardContainer cardData={currentStepData.data} />
      )}
      {currentStepData?.type === "slider" && (
        <div className="slider2">
        <SliderWithBlocks className="s1"
          start={currentStepData.data.start}
          end={currentStepData.data.end}
          blockInterval={currentStepData.data.blockInterval}
          labelText={currentStepData.data.labelText}
          collectionType={currentStepData.data.collectionType}
        />
        </div>
      )
      }
    </div>
  );
};

export default PromptContainer;
