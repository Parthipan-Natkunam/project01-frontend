import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle } from "styled-components";
import {Colors} from "@blueprintjs/core";
import {App} from './App';


//       font-family: 'Roboto', sans-serif;
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab&display=swap');  
  body{
      margin:0;
      padding:0;
      font-family: 'Roboto', sans-serif;
  }
  h1,h2,h3,h4,h5,h6,label{
    font-family: 'Roboto Slab', serif;
  }
  ::placeholder{
    color: ${Colors.WHITE};
    opacity: 1;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
