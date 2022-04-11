import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

     button {
         cursor: pointer;
     }

     a{
         text-decoration: none;
    }
    
    input,textarea{
        border: none;
        outline: none;
    }
`;

export default GlobalStyle;