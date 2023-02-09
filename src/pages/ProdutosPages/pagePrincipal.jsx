import * as React from 'react';
import HeaderProdutos from '../../Components/Header/headerProdutos';
import Box from '@mui/material/Box';
import { EspacadorPilar, EspacadorTorre } from '../../Components/Produtos/produtosIndex';


export default function ProdutosPage() {

  return (
    <HeaderProdutos>
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
          <EspacadorPilar />
          <EspacadorTorre />
          <EspacadorPilar />
          <EspacadorTorre />
          <EspacadorPilar />
          <EspacadorTorre />
          <EspacadorPilar />
          <EspacadorTorre />
          <EspacadorPilar />
          <EspacadorTorre />

        </Box>
    </HeaderProdutos>
  );
}