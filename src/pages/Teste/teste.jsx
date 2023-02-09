import * as React from 'react';
import HeaderProdutos1 from '../../Components/Header/headerProdutos1';
import Box from '@mui/material/Box';
import { EspacadorPilar, EspacadorTorre } from '../../Components/Produtos/produtosIndex';


export default function TestePage() {

  return (
    <HeaderProdutos1>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 3,
              width: 250,
              height: 300,
            },
          }}
        >
          <EspacadorPilar />
          <EspacadorTorre />
          <EspacadorPilar />
          <EspacadorTorre />

        </Box>
    </HeaderProdutos1>
  );
}