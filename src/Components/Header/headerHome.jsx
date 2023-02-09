import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { AppBarLabel, PeriTheme } from '../Header/header';



function HeaderHome({ children }) {

    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={PeriTheme}>
                <AppBar position="fixed" color="primary" enableColorOnDark>
                    <AppBarLabel />
                </AppBar>
            </ThemeProvider>
            <Box component="main">
                {children}
            </Box>
        </Stack>
    );
};

export default HeaderHome;