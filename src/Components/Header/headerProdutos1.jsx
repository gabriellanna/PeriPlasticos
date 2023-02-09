import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { AppBarLabel, PeriTheme } from './header';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import SideBar from '../SideBar';

//  Nome do component MUI:  ClippedDrawer

function HeaderProdutos1({ children }) {


    return (
        <Box sx={{ display: 'flex' }}>


            <CssBaseline />
            <ThemeProvider theme={PeriTheme}>
                <AppBar position="fixed" enableColorOnDark sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <AppBarLabel />
                </AppBar>
            </ThemeProvider>



            <SideBar />



            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f0f0f0', height: '100vh' }}>
                <Toolbar />
                <Toolbar />
                {children}
            </Box>

        </Box>
    );
};

export default HeaderProdutos1;