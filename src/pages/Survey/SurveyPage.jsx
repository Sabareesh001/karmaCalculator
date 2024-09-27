import { useEffect, useState } from "react";
import "./SurveyPage.css";
import surveypage1 from "/src/assets/SurveyPage1.png";
import surveypage2 from "/src/assets/SurveyPage2.png";
import surveypage3 from "/src/assets/surveypage3.png";
import surveypage4 from "/src/assets/surveypage4.png";
import surveypage5 from "/src/assets/surveypage5.png";
import surveypage6 from "/src/assets/surveypage6.png";
import bicycle from "/src/assets/Bicycle.png";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Card from "../../components/circularProgressBarWithLabel/card/Card";
import Button from "../../components/circularProgressBarWithLabel/card/button/Button";
import Vehicles from "./vehicles/PromptContainer";
import PromptContainer from "./vehicles/PromptContainer";
import { useNavigate } from "react-router-dom";
const SurveyPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currStep, setCurrStep] = useState(1);
  const [prevStep,setPrevStep] = useState(1);
  const [isLast,setIsLast] = useState(false);
  const totalSteps = 4;
  const [backgroundImages, setBackgroundImages] = useState([
    {
      score: 0,
      img_url: surveypage1,
    },
    {
      score: 5,
      img_url: surveypage2,
    },
    {
      score: 10,
      img_url: surveypage3,
    },
    {
      score: 15,
      img_url: surveypage4,
    },
    {
      score: 20,
      img_url: surveypage5,
    },
    {
      score: 25,
      img_url: surveypage6,
    },
  ]);
  return (
    <div className="container">
      <div className="inner-container ">
        <div className="imageContainer">
          {
            <img
              src={
                backgroundImages?.find((data) => {
                  return data.score === score;
                }).img_url
              }
            />
          }
        </div>
      </div>
      <div className="questionContainer">
        <div className="progressBarContainer">
          <div className="progressBar">
            <CircularProgressbarWithChildren
              maxValue={totalSteps}
              value={Math.floor(currStep)}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                strokeWidth: 10,
                rotation: 0,
                trailColor: "#FFF4E4",
                pathColor: "#FEA062",
              })}
            >
              <div className="stepDisplay">{`${Math.floor(currStep)}/${totalSteps}`}</div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
       <div className="stepPageContainer">
       <PromptContainer setIsLast={setIsLast} setCurrStep={setCurrStep} currStep={currStep}  />
       </div>
        <div className="buttonsContainer">
        { !isLast && currStep<totalSteps+0.9 &&
          <Button 
          onClick={()=>{
            setPrevStep(currStep)
            setCurrStep((prev)=>(prev+0.1))
          }}
          content={"Next"} />
          }
        {  !isLast &&  currStep>1 && currStep<totalSteps+1 &&
          <Button
          onClick={()=>{
              setCurrStep(prevStep)
          }}
          content={"Back"} />}
       { isLast &&
        <Button onClick={()=>{navigate('/karmareport')}} content={"Calculate Carbon Footprint"}/>}
        </div>
        
      </div>
    
    </>
  );
};

export default SurveyPage;

