import React, {useContext, useEffect, useState} from 'react';
import Card from '../../../components/circularProgressBarWithLabel/card/Card';
import './CardContainer.css';
import { SurveyDataContext } from '../../../contexts/surveyData/SurveyDataContext';

const CardContainer = ({cardData,select,setValidateNext,selectedCardData})=>{
  
  const {cookies,setSurveyData} = useContext(SurveyDataContext);
  const handleBorder = (index) => {

   
    console.log(cookies)

    selectedCardData.forEach((d,i)=>{
        if(i===index){
          selectedCardData[index] = !d;
        }
        else if(select==='single' && index>-1){
          selectedCardData[i] = false;
        }
        if(d){
          setValidateNext(true);
        }
      })
      if(index>-1){
      setSurveyData(cookies?.surveyData)
      }
  }
  useEffect(()=>{
    setValidateNext(false);
     if(selectedCardData){
      handleBorder(-1);
     }
  },[selectedCardData])
    return(
        <div className="cardsContainer">
      {
        cardData.map((data, index) => (
            <div   style={{
              flex : `0 1 ${cardData.length>6?'25%':'35%'}`
            }}       
            className="card" onClick={() => {handleBorder(index)}} key={index}>
                <Card
                  content={data.icon}
                  title={data.name}
                  borderColor={selectedCardData?.[index]?data.border_color:''}
                  backgroundColor={data.color}
                />
            </div> 
          ))
            }
        </div>
    )
}

export default CardContainer;