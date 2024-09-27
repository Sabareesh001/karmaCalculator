import Layout from "../pages/layout/Layout";
import publicRoutes from "./publicRoutes";

import { useRoutes } from "react-router-dom";

const Routes = ()=>{
    const exportRoutes = useRoutes([
        {
            path:'/',
            element:<Layout/>,
            children:publicRoutes
        }
    ])

    return exportRoutes;
}

export default Routes;