import { useContext, useEffect, useState } from "react";
import "./Slider.css";
import Slider from "@mui/material/Slider";
import { SurveyDataContext } from "../../../../contexts/surveyData/SurveyDataContext";

const SliderWithBlocks = ({
  blockInterval,
  start,
  end,
  labelText,
  collectionType,
  selectedSliderData,
  setValidateNext,
}) => {
  const [formattedValues, setFormattedValues] = useState([]);
  const { cookies, setSurveyData } = useContext(SurveyDataContext);
  const [value, setValue] = useState(start);

  useEffect(() => {
    setValidateNext(true);
  }, [setValidateNext]);
  useEffect(() => {
    if (selectedSliderData[0] !== false) {
      setValue(selectedSliderData[0]);
    }
  }, [selectedSliderData]);
  useEffect(() => {
    const totalSteps = blockInterval ? (end - start) / blockInterval + 1 : 2;
    const newArray = Array.from({ length: totalSteps }, (_, i) => {
      if (blockInterval) {
        const value = start + i * blockInterval;
        return {
          value,
          label: `${value} ${labelText ? labelText : ""}`,
        };
      } else {
        const value = start + i * (end - start);
        return {
          value,
          label: `${value} ${labelText ? labelText : ""}`,
        };
      }
    });

    setFormattedValues(newArray); // Set the new array with formatted values
  }, [blockInterval, start, end]);
  return (
    <div className="sliderContainer">
      <div className="slider">
        <div className="s1"> </div>
        <Slider
          sx={{
            width: "100%",
            color: "#0e70eb" /* Blue color */,
            "& .MuiSlider-thumb": {
              height: 15 /* Larger thumb size */,
              width: 15,
              backgroundColor: "#0e70eb" /* White thumb with border */,
              border: "3px solid #0e70eb",
            },
            "& .MuiSlider-rail": {
              height: 5 /* Thicker rail */,
              opacity: 1,
              backgroundColor: "#d6d6d6" /* Light gray background */,
            },
            "& .MuiSlider-track": {
              height: 6 /* Thicker track */,
              backgroundColor: "#0e70eb" /* Blue color */,
            },
          }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            selectedSliderData[0] = e.target.value;
            setSurveyData(cookies.surveyData);
          }}
          marks={formattedValues}
          valueLabelDisplay="auto"
          min={start}
          max={end}
        />

        <div className="s2"></div>
      </div>
      <div className="valueButtonContainer">
        <div className="valueButton">
          {value + ` ${collectionType ? collectionType : ""}`}
        </div>
      </div>
    </div>
  );
};

export default SliderWithBlocks;
