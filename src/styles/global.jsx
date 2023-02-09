import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
    }



    ul {
        list-style: none;

        display: flex;
        flex-wrap: wrap;
        //margin-right: 200px;

        li {
            padding-left: 15px;
            padding-right: 15px;
        }
        

        li a {
            color: #fff;
            display: block; //poque ele é um elemento de linha e queremos q vire ele mento de caixa
            text-decoration: none;

            padding: 10px 20px 10px 20px;
            margin-left: 10px;
            font-size: large;
        }

        li a:hover {
            color: #fff;
            display: block; //poque ele é um elemento de linha e queremos q vire ele mento de caixa
            text-decoration: none;

            background-color: #ffffff16;

            transition: 0.4s;
            border-radius: 10px;
            margin-left: 10px;
        }
    }
`;

export default GlobalStyle;