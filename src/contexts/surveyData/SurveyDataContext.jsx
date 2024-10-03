import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { apiHost } from "../../config/config";
import { Surfing } from "@mui/icons-material";
export const SurveyDataContext = createContext(null);

export const SurveyDataContextProvider = ({component}) => {
  const [score,setScore] = useState(0);
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
  let postSurveyData = [];
  let totalEmissionValue = 0;
  let appliancesData = null;
    if(cookies.surveyData){
         cookies.surveyData.forEach((step,i)=>{
          const selectionList =  [];
          let  isEmissionValueReached = false;
          let  selectionIndices = [];
          let isFirstSelectionDone= false;
          let selectionIds = [];
          let name  = '';
          let  quantity = 0;
          let emission = 0;
             step.forEach((section,index)=>{
              if(name===''){
                     name  = stepData[i]?.[index]?.name
              }
                    section.forEach((choice,ind)=>{
                      if(choice !== false){
                        // console.log(emission)
                        if(Array.isArray(stepData[i]?.[index]?.data)){
                          // console.log(stepData[i]?.[index]?.data?.[ind]?.emission_value)
                        if(stepData[i]?.[index]?.data?.[ind]?.emission_value){
                          if(!isFirstSelectionDone){
                            isEmissionValueReached = true;
                            selectionIndices.push(ind)
                            quantity++;
                            selectionIds.push(Number(stepData[i]?.[index]?.data?.[ind]?.id));
                            emission+=Number(stepData[i]?.[index]?.data?.[ind]?.emission_value);
                          }
                          else{
                            isEmissionValueReached = true;
                            selectionIds.push(Number(stepData[i]?.[index]?.data?.[ind]?.id));
                            selectionIndices.forEach((selectIndex)=>{
                               emission+=Number(stepData[i]?.[index]?.data?.[ind]?.emission_value?.[selectIndex]);
                            })
                          }
                        }
                        else{
                          selectionIndices.push(ind)
                          selectionIds.push(Number(stepData[i]?.[index]?.data?.[ind]?.id));
                        }
                        }
                        else{
                          isFirstSelectionDone= true;
                          if(isEmissionValueReached){
                              //  console.log(quantity,stepData[i]?.[index]?.data)
                               let totalUnit = Number(choice);
                               emission += emission*(totalUnit/quantity);
                               selectionList.push(Number(choice));
                          }
                          else{
                          // console.log(quantity,stepData[i]?.[index]?.data);
                          
                               quantity =  Number(choice);
                               selectionList.push(Number(choice));
                               if(appliancesData!==null && appliancesData.quantity>0){
                                emission =(quantity/appliancesData?.quantity)*appliancesData?.emission;
                                emission /=10;
                                // console.log("Appliances Data : ",emission,appliancesData)

                               }
                          }
                          
                        }
                        }
                      }) 
                      if(i===2){
                        appliancesData={quantity,emission};
                      }

                     
                    })
                    totalEmissionValue+=emission;
                    if(selectionIds.length>0){
                      selectionList.push(selectionIds)
                    }
                    console.log(stepData[i])
                    postSurveyData.push({
                      name:name,
                      selection:selectionList
                    })
                    // console.log(postSurveyData)
                
             })
        
    }
    postSurveyData.push({
      name:'carbon_footprint',
      selection:[totalEmissionValue.toFixed(2)]
    })
    setScore(totalEmissionValue);
    setSurveyPostData(postSurveyData);
    console.log(postSurveyData);
 },[stepData,cookies.surveyData])

//  console.log(cookies.surveyData)

  return (
    <SurveyDataContext.Provider
      value={{
        cookies,
        setSurveyData,
         stepData,
        questions,
        score,
        surveyPostData,
        setLastSurveyPosition
      }}
    >
      {component}
    </SurveyDataContext.Provider>
  );
};


