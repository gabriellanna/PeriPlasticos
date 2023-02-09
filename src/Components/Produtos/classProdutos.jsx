import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function Produto({ nome, img, alt, nav }) {
  var navigate = useNavigate();

  return (
          <DivCard onClick={() => navigate(`${nav}`)}>
            <section>
              <DivCardTop>
                <img
                  src={`${img}`}
                  alt={`${alt}`} />
              </DivCardTop>
              <DivCardBotton>
                <p>
                  {nome}
                </p>
              </DivCardBotton>
            </section>
          </DivCard>
  )
};

export default Produto;


//                ___
//                |||
//                |||
//     Styles     |||
//               _|||_
//               \   /
//                \ /
//                 V
//



const DivCard = styled.section`
section{
  width: 250px;
  height: 300px; 
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 10px #585858;
  cursor: pointer;
  border-style: outset;
}

section:hover{
  box-shadow: 5px 5px 15px black;
  transition: 0.4s;
  margin-top: 5px;
}

section:active{
  transition: 0.15s;
  opacity: 0.6;
}
`;

const DivCardTop = styled.div`
width: 100%;
height: 83.3%; 
background-color: white;

img {
  width: 100%;
  height: 100%;
}
`;

const DivCardBotton = styled.div`
width: 100%;
height: 16.7%; 
background-color: #e0e0e0;
display: flex;
align-items: center;
justify-content: center;

p{
  font-size: larger;
  font-weight: 600;
}
`;