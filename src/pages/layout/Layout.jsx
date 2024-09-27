import { Box, Stack } from '@mui/material';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = ()=>{
    return(
        <Stack className='layoutContainer' direction={'row'}>
            <Box className="phoneView" >
                <Outlet/>
            </Box>
        </Stack>
    )
}

export default Layout;