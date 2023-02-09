import styled from "styled-components";


export const ImageDiv = styled.div`

    width: 100%;
    height: 50%;
    
    img {
        width: 100%;
        min-width: 1400px;
        height: 700px;
    }
`;



export const DivBar = styled.div`
    width: 100%;
    height: 100px;
    background-color: #0b534eef;

    align-items: center;
    justify-content: space-around;
    display: flex;
    color: #fff;

    #buttonDivBar:hover {
        opacity: 0.88;
    }

    #buttonDivBar:active {
        opacity: 0.65;
    }
`;



export const ContainerInferior = styled.div`
    width: 100%;
    padding-top: 50px;
    justify-content: center;
    display: flex;
`;



export const Content = styled.div`
    max-width: 1100px;
`;



export const Content1111 = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    background-color: #c9c9c9;
    padding: 30px;

`;





export const Content1111AAA = styled.div`
    width: 50%;
    height: 700px;
    //background-color: #7e7e7e;
    padding-top: 50px;
    padding-left: 20px;
div {margin-top: 30px;}



    .h3 p {
        font-weight: 100;
        font-size: 22px;
        color: #a8a8a8;
    }

div h1 {
        font-size: 45px;
        margin-inline: 10px;
    }

    p{
        font-size: 20px;
        color: #727272;
    }
`;

export const Content1111BBB = styled.div`
    width: 50%;
    height: 700px;
    //background-color: #7e7e7e;
    display: flex;
    padding-top: 50px;
    padding-left: 20px;
    justify-content: flex-end;
div {margin-top: 30px;}
#h1 {margin-top: 63.5px;}



    .h3 p {
        font-weight: 100;
        font-size: 22px;
        color: #a8a8a8;
    }

div h1 {
        font-size: 45px;
        margin-inline: 10px;
    }

    p{
        font-size: 20px;
        color: #727272;
    }
`;



export const ButtonBar = styled.button`
    background-color: #ffffffff;
    color: #0b534eef;
    width: 200px;
    height: 50%;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;

    font-weight: 600;
    font-size: 16px;

    
    /*a:hover {
        background-color: #ffffff3d
        transition: 0.4s;
    }*/

`;
