import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    html, body {
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    body {
        font-size: 1rem;
        background-color: #ecf0f1;
        color: #666;
        font-family: 'Roboto', sans-serif;
    }
    
`

export default GlobalStyles