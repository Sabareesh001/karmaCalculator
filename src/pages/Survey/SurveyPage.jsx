import { useEffect, useState } from "react";
import "./SurveyPage.css";
import surveypage1 from "/src/assets/SurveyPage1.png";
import surveypage2 from "/src/assets/SurveyPage2.png";
import surveypage3 from "/src/assets/surveypage3.png";
import surveypage4 from "/src/assets/surveypage4.png";
import surveypage5 from "/src/assets/surveypage5.png";
import surveypage6 from "/src/assets/surveypage6.png";
import bicycle from "/src/assets/Bicycle.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Card from "../../components/circularProgressBarWithLabel/card/Card";
import Button from "../../components/circularProgressBarWithLabel/card/button/Button";
import PromptContainer from "./promptContainer/PromptContainer";
import { useNavigate, useSearchParams } from "react-router-dom";
import Buttons from "../../components/button";
const SurveyPage = () => {
  const [score, setScore] = useState(0);
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

  const navigateNextQuestion = () => {
    setScore((prev) => prev + 0.35);
    const nextStep = (Math.floor(currStep) + 1).toFixed(1);
    setSearchParams({ page: nextStep });
  };

  const handleNext = () => {

  }
  return (
    <>
    <div>
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
          <div className="question-container">
            <div className="question">
              Choose the vehicle you use for commuting?
            </div>
            <div className="options">
              <div className="bicylce">
                <img src={bicycle} alt="bicycle"/>
                <div style={{paddingTop:'7px'}}>Cycle</div>
              </div>
              <div className="two-wheeler">
              <img src={motor} alt="bicycle"/>
              <div style={{paddingTop:'7px'}}>Two-wheeler</div>
              </div>
              <div className="car">
              <img src={car} alt="bicycle"/>
              <div style={{paddingTop:'7px'}}>Car</div>
              </div>
              </div>
            </div>
            <div className="next" onClick={handleNext}>Next</div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default SurveyPage;

