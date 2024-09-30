import { useState } from 'react';
import './SurveyPage.css';

const SurveyPage = ()=>{
    const [score,setScore] = useState(0);
    const [backgroundImages,setBackgroundImages] = useState([
        {
            score:0,
            img_url:'/src/assets/SurveyPage1.png'
        },
        {
            score:10,

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