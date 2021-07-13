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

    section {
        margin-bottom: 0.8rem;

        background-color: ${({ theme }) => theme.card};
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h2 {
        color: ${({ theme }) => theme.title};
        font-size: 1.4rem;
        padding: 1rem;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
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