import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

    body, input, button, textarea {
        font: 400 16px Inter, sans-serif;
    }

    @media(max-width: 1440px) {
        html {
            // 15px
            font-size: 93.75%;
        }
    }

    @media(max-width: 1024px) {
        html {
            // 13px
            font-size: 81,20%;
        }
    }

    @media(max-width: 425px) {
        html {
            // 12px
            font-size: 75%;
        }
    }
`