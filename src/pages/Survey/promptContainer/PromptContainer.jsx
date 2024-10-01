import { useContext, useEffect, useState } from "react";
import "./PromptContainer.css";
import CardContainer from "../cardContainer/CardContainer";
import SliderWithBlocks from "../../../components/circularProgressBarWithLabel/card/slider/Slider";
import { useCookies } from "react-cookie";
import { replace, useNavigate } from "react-router-dom";
import { SurveyDataContext } from "../../../contexts/surveyData/SurveyDataContext";
const PromptContainer = ({
  isLast,
  currStep,
  currSection,
  setIsLast,
  navigateNextQuestion,
  setValidateNext,
}) => {
  const surveyData = useContext(SurveyDataContext)
  const {questions,stepData,cookies,setSurveyData} =  surveyData;

  useEffect(() => {
    console.log(cookies && (!cookies.surveyData) && stepData.length>0);
    if(cookies && (!cookies.surveyData) && stepData.length>0){
      let newOuterArray = Array(stepData?.length);
      stepData?.forEach((steps,i)=>{
        let sectionArray = Array(steps.length);
        steps.forEach((section,index)=>{
          console.log(section)
          let newInnerArray = Array(section?.data?.length).fill(false);
          sectionArray[index]=(newInnerArray)
        })
        newOuterArray[i] = sectionArray;
      })
      console.log(newOuterArray)
      setSurveyData(newOuterArray);
    }
 
  }, [stepData,cookies]);

  useEffect(() => {
    if (currSection > questions[currStep - 1].length) {
      navigateNextQuestion();
    } else if (currStep === questions.length) {
      setIsLast(true);
    } else {
      if (isLast) {
        setIsLast(false);
      }
    }
  }, [currStep, currSection]);
  console.log(currSection,currStep)
  const currentQuestion = questions.length>0?questions[currStep - 1][currSection - 1]?.q:null;
  const currentStepData = stepData.length>0?stepData[currStep - 1][currSection - 1]:null;

  return (
    <div className="promptContainer">
      <div className="question">{currentQuestion}</div>
      {currentStepData?.type === "card" && (
        <CardContainer
          cookies={cookies}
          selectedCardData={cookies.surveyData && cookies?.surveyData[currStep-1][currSection-1]}
          select={currentStepData.select}
          setValidateNext={setValidateNext}
          cardData={currentStepData.data}
        />
      )}
      {currentStepData?.type === "slider" && (
        <div className="slider2">
          <SliderWithBlocks
            className="s1"
            cookies={cookies}
            setValidateNext={setValidateNext}
            start={currentStepData.data.start}
            end={currentStepData.data.end}
            selectedSliderData={ cookies.surveyData && cookies?.surveyData[currStep-1][currSection-1]}
            blockInterval={currentStepData.data.blockInterval}
            labelText={currentStepData.data.labelText}
            collectionType={currentStepData.data.collectionType}
          />
        </div>
      )}
    </div>
  );
};

export default PromptContainer;
