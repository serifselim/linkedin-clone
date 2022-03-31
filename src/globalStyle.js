import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 10px;
    }

    body{
        font-family: sans-serif;
        background: #F3F2EF;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

`;

export default GlobalStyled;