import { useEffect, useState } from "react";
import "./SurveyPage.css";
import surveypage1 from "/src/assets/SurveyPage1.png";
import surveypage2 from "/src/assets/SurveyPage2.png";
import surveypage3 from "/src/assets/surveypage3.png";
import surveypage4 from "/src/assets/surveypage4.png";
import surveypage5 from "/src/assets/surveypage5.png";
import surveypage6 from "/src/assets/surveypage6.png";
import bicycle from "/src/assets/Bicycle.png";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Card from "../../components/circularProgressBarWithLabel/card/Card";
import Button from "../../components/circularProgressBarWithLabel/card/button/Button";
import PromptContainer from "./promptContainer/PromptContainer";
import { useNavigate, useSearchParams } from "react-router-dom";
const SurveyPage = () => {
  const navigate = useNavigate();
  const [searchParams,setSearchParams] = useSearchParams();
  const [score, setScore] = useState(15);
  const [currStep, setCurrStep] = useState(1);
  const [prevStep,setPrevStep] = useState(1);
  const [isLast,setIsLast] = useState(false);
  const totalSteps = 4;
  useEffect(() => {
    setCurrStep(Number(searchParams.get('page')) || 1); // Default to 1 if not present
  }, [searchParams]);
  const [backgroundImages, setBackgroundImages] = useState([
    {
      score: 15,
      img_url: surveypage1,
    },
    {
      score: 16,
      img_url: surveypage2,
    },
    {
      score: 16.5,
      img_url: surveypage3,
    },
    {
      score: 17,
      img_url: surveypage4,
    },
    {
      score: 17.5,
      img_url: surveypage5,
    },
    {
      score: 17.6,
      img_url: surveypage6,
    },
  ]);

  const navigateNextQuestion = ()=>{
    setScore((prev)=>((prev+0.35)))
    const nextStep = (Math.floor(currStep) + 1).toFixed(1);
    setSearchParams({ page: nextStep });
  }

  const handleNext = () => {
    setScore((prev)=>((prev+0.35)))
    console.log((score+0.35).toFixed(2))
    const nextStep = (currStep + 0.1).toFixed(1);
    setSearchParams({ page: nextStep });
  };

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <div className="inner-container ">
      <div className="scoreContainer">
        <div className="score"><div className="arrowUp">
          <ArrowDropUpIcon color="error" fontSize="inherit" />
        </div> {score.toFixed(2)} ton CO2</div>
        </div>
    
        <div className="imageContainer">
          { backgroundImages &&
            <img
              src={
                backgroundImages?.find((data,i) => {
                  if(i<backgroundImages.length-1){
                    return score>=data.score && score<=backgroundImages[i+1].score;
                  }
                  else{
                    return true
                  }
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
       <PromptContainer  isLast={isLast} setIsLast={setIsLast} navigateNextQuestion={navigateNextQuestion}  currStep={currStep}  />
       </div>
       <div className="buttonsContainer">
       {!isLast && currStep > 1 && currStep < totalSteps + 1 && (
          <Button type='light' onClick={handleBack} content={"Back"} />
        )}
        {!isLast && currStep < totalSteps + 1 && (
          <Button onClick={handleNext} content={"Next"} />
        )}
      
        {isLast && (
          <Button onClick={() => navigate('/karmareport')} content={"Calculate Carbon Footprint"} />
        )}
      </div>
        
      </div>
    </div>
  );
};

export default SurveyPage;
