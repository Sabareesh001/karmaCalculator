import publicRoutes from "./publicRoutes";

import { useRoutes } from "react-router-dom";

const Routes = ()=>{
    const exportRoutes = useRoutes([
        ...publicRoutes
    ])

    return exportRoutes;
}

export default Routes;