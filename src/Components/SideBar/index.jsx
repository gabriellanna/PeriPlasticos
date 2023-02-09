import React from 'react'
import styled from 'styled-components';

const SideContainer = styled.div`
    width: 250px;
    height: 100vh;

    background-color: #ffff;
`;

const Side = styled.div`
    width: 100%;
    height: 100%;

    background-color: #0b534e99;
`;

const SideBar = () => {
  return (
    <SideContainer>
      <Side>

      </Side>        
    </SideContainer>
  )
}

export default SideBar;