import * as React from 'react';
import styled from 'styled-components';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import PageviewIcon from '@mui/icons-material/Pageview';
import TextField from '@mui/material/TextField';
import logoPlastic from '../../Assets/logoPlastic.png'


export const PeriTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0b534e',
        },
    },
});

export const PeriTheme2 = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#659491',
        },
    },
});

const ImageDiv = styled.div`

    width: 30%;

    
    img {
        width: 200px;
    }
`;


export const AppBarLabel = () => {
    return (
        <Toolbar sx={{ justifyContent: 'space-evenly', flexDirection: 'row', p: 2 }}>
            <Box>
                <ImageDiv>
                    <img
                        src={`${logoPlastic}`}
                        srcSet={`${logoPlastic} 2x`}
                        alt={"Logo da Empresa"}
                        loading="lazy"
                    />
                </ImageDiv>
            </Box>
            <Box>
                <ul>
                    <li><a href='http://localhost:3000/'><strong>Home</strong></a></li>
                    <li><a href='http://localhost:3000/'><strong>Sobre</strong></a></li>
                    <li><a href='http://localhost:3000/produtos'><strong>Produtos</strong></a></li>
                    <li><a href='http://localhost:3000/'><strong>Contato</strong></a></li>
                </ul>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextField
                    id="pesquisa"
                    label="O que está procurando?"
                    placeholder='Digite...'
                    multiline
                />
                <PageviewIcon fontSize="large" sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </Box>
        </Toolbar>
    );
}