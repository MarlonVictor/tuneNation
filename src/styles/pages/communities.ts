import styled from 'styled-components'


export const CommunitiesContainer = styled.div`
    background: ${({ theme }) => theme.background};
    min-height: 100vh;

    > main {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 10px;
    
        max-width: 1240px;
    
        padding: 16px;
        margin: 0 auto;

        @media(max-width: 1024px) {
            grid-template-columns: 1fr 2fr;
        }

        @media(max-width: 540px) {
            grid-template-columns: 1fr;

            .left section:last-child {
                display: none;
            }
        }
    }

    section {
        color: ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.card};

        h2 {
            color: ${({ theme }) => theme.title};
        }
    }
`