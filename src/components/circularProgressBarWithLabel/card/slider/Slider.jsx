import { useContext, useEffect, useState } from 'react';
import './Slider.css';
import Slider from '@mui/material/Slider';
import { SurveyDataContext } from '../../../../contexts/surveyData/SurveyDataContext';

const SliderWithBlocks = ({ blockInterval, start, end,labelText,collectionType,selectedSliderData,setValidateNext}) => {
    const [formattedValues, setFormattedValues] = useState([]);
    const {cookies,setSurveyData} = useContext(SurveyDataContext)
    const [value,setValue] = useState(start);
 
    useEffect(()=>{
         setValidateNext(true);
    },[setValidateNext])
    useEffect(()=>{
       if(selectedSliderData[0] !== false){
        setValue(selectedSliderData[0]);
       }
    },[selectedSliderData])
    useEffect(() => {
      const totalSteps = blockInterval?((end - start) / blockInterval + 1):2;
      const newArray = Array.from({ length: totalSteps }, (_, i) => {
        if(blockInterval){
            const value = start + i * blockInterval;
            return {
              value,
              label: `${value} ${labelText?labelText:''}`,
            };
        }
        else{
            const value = start + (i * (end-start));
            return {
              value,
              label: `${value} ${labelText?labelText:''}`,
            };
        }
      
      });
  
      setFormattedValues(newArray); // Set the new array with formatted values
    }, [blockInterval, start, end]);
  return (
    <div className='sliderContainer'>
      <div className='slider'>
        <div className='s1'>      </div>
        <Slider
          sx={{
            width: "100%",
            color:"#0e70eb",
            '& .MuiSlider-thumb': {
              border: '2px solid currentColor',
            },
            '& .MuiSlider-rail': {
              opacity: 0.5,
              backgroundColor: '#bfbfbf',
            },
            '& .MuiSlider-track': {
              backgroundColor: '#1976d2',
            },
          }}
          value={value}
          onChange={(e)=>{
            setValue(e.target.value);
            selectedSliderData[0]=e.target.value;
        setSurveyData(cookies.surveyData);
          }}
          marks={formattedValues}
          valueLabelDisplay="auto"
          min={start}
          max={end}
        />
        <div className='s2'></div>
      </div>
      <div className='valueButtonContainer'>
          <div className='valueButton'>
              {value + ` ${collectionType?collectionType:''}`}
          </div>
      </div>
    </div>
  );
};

export default SliderWithBlocks;
