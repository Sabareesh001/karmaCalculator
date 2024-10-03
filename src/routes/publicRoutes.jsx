import FormPage from "../pages/Form/FormPage";
import InstructionsPage from "../pages/Instructions/InstructionsPage";
import ReportPage from "../pages/KarmaReport/ReportPage";
import SurveyPage from "../pages/Survey/SurveyPage";
import {SurveyDataContextProvider} from '../contexts/surveyData/SurveyDataContext'

const publicRoutes = [
    {
        path:'/instructions',
        element:<InstructionsPage/>
    },
    {
        path:'/survey',
        element:<SurveyDataContextProvider component={<SurveyPage/>} />
        
    },
    {
        path:'/karmaReport',
        element:<ReportPage/>
    },
    {
        path:'/form',
        element:<FormPage/>
    }
]

export default publicRoutes;