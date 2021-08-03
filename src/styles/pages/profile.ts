import styled from 'styled-components'


export const ProfileContainer = styled.div`
    background: ${({ theme }) => theme.background};
    min-height: 100vh;

    main {
        display: grid;
        grid-template-columns: 280px 1fr 312px;
        gap: 10px;

        max-width: 1240px;

        padding: 16px;
        margin: 0 auto;

        @media(max-width: 1024px) {
            grid-template-columns: 1fr 2fr;

            > section {
                display: none;
            }
        }

        @media(max-width: 540px) {
            grid-template-columns: 1fr;
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

export const CommunitiesButton = styled.button`
    height: 3rem;
    
    font-weight: 500;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.title};

    background: ${({ theme }) => theme.button};
    
    border-radius: 8px;
    border: 0;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    @media(min-width: 425px) {
        display: none;
    }
`