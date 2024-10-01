import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { apiHost } from "../../config/config";
import { Surfing } from "@mui/icons-material";
export const SurveyDataContext = createContext(null);

export const SurveyDataContextProvider = ({component}) => {
  const [cookies, setCookie] = useCookies(['surveyData','lastSurveyPosition']);
  const [surveyPostData,setSurveyPostData] = useState([]);
  const setSurveyData =  (data)=>{
    setCookie('surveyData',data);
  }
  const setLastSurveyPosition = (data)=>{
    setCookie('lastSurveyPosition',data);
  }
  const [questions, setQuestions] = useState([
    [
      { q: "Choose the vehicles you use for commuting?" },
      { q: "How many Vehicles do you own?" },
      { q: "What type of fuel do you use?" },
      { q: "How many KM do you drive per week?" },
    ],
    [{ q: "What you normally eat?" }],
    [
      {
        q: "Select the appliances you use at your home",
      },
    ],
    [
      {
        q: "How much electricity do you consume for a month?",
      },
    ],
  ]);

  const [stepData,setStepData] =  useState([]);

  const fetchStepData = ()=>{
    try {

      axios.get(`${apiHost}/api/stepdata`).then((res)=>{ 
        if(res.data){
          console.log(res.data)
          setStepData(res.data);
        }
        else{
          return console.error('Error in fetching Step Data');
        }
      })
      
    } catch (error) {
        console.error(error.message || 'Error in fetching Step Data');
    }
  }

  useEffect(()=>{
    fetchStepData(); 
  },[])

 useEffect(()=>{
    if(cookies.surveyData){
      setSurveyPostData(
         cookies.surveyData.forEach((step,i)=>{
             step.forEach((section,index)=>{

             })
         })
      )
    }
 },[stepData])

 console.log(cookies.surveyData)

  return (
    <SurveyDataContext.Provider
      value={{
        cookies,
        setSurveyData,
         stepData,
        questions,
        setLastSurveyPosition
      }}
    >
      {component}
    </SurveyDataContext.Provider>
  );
};


