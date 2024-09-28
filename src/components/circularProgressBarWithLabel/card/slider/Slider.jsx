import { useEffect, useState } from 'react';
import './Slider.css';
import Slider from '@mui/material/Slider';

const SliderWithBlocks = ({ blockInterval, start, end,labelText,collectionType}) => {
    const [formattedValues, setFormattedValues] = useState([]);
    const [value,setValue] = useState(start);
    
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
      <div className='s1'>

      <Slider 
        sx={{
          width: "100%",
        }}
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        marks={formattedValues}
        valueLabelDisplay="auto"
        step={blockInterval}
        min={start}
        max={end}
      />
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
