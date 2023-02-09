import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { AppBarLabel, PeriTheme } from './header';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer
//  Nome do component MUI:  ClippedDrawer

function HeaderProdutos({ children }) {

    const drawerWidth = 240;

    return (
        <Box sx={{ display: 'flex' }}>


            <CssBaseline />
            <ThemeProvider theme={PeriTheme}>
                <AppBar position="fixed" enableColorOnDark sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <AppBarLabel />
                </AppBar>
            </ThemeProvider>




                <Drawer
                    variant="permanent"
                    
                    
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', marginTop: 10 },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>




            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f0f0f0', height: '100vh' }}>
                <Toolbar />
                <Toolbar />
                {children}
            </Box>

        </Box>
    );
};

export default HeaderProdutos;