import { useState } from 'react';
import './SurveyPage.css';
import surveypage1 from "/src/assets/SurveyPage1.png";
import surveypage2 from "/src/assets/SurveyPage2.png";
import surveypage3 from "/src/assets/surveypage3.png";
import surveypage4 from "/src/assets/surveypage4.png";
import surveypage5 from "/src/assets/surveypage5.png";
import surveypage6 from "/src/assets/surveypage6.png";

const SurveyPage = ()=>{
    const [score,setScore] = useState(0);
    const [backgroundImages,setBackgroundImages] = useState([
        {
            score:0,
            img_url:surveypage1
        },
        {
            score:5,
            img_url:surveypage2
        },
        {
            score:10,
            img_url:surveypage3
        },
        {
            score:15,
            img_url:surveypage4
        },
        {
            score:20,
            img_url:surveypage5
        },
        {
            score:25,
            img_url:surveypage6
        }
    ])
    return(
        <div>
            <div className='container'>
                <div className='inner-container '>
                    <div className='imageContainer'>
                        {
                           
                            <img src={ backgroundImages?.find((data)=>{
                                return(
                                    data.score === score
                                )
                            }).img_url}/>
                        }
                    </div> 

                </div>
            </div>
        </div>
    )
}

export default SurveyPage;