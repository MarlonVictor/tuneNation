import styled from 'styled-components'


export const HomeContainer = styled.div`
    background: ${({ theme }) => theme.background};
    min-height: 100vh;

    main {
        display: grid;
        grid-template-columns: 280px 1fr 312px;
        gap: 10px;

        max-width: 1240px;
        position: relative;
        padding: 16px;
        margin: 0 auto;

        .left section:last-child {
            display: none;
        }

        @media(max-width: 1024px) {
            grid-template-columns: 1fr 2fr;

            .left .popular, .right {
                display: none;
            }

            .left section:last-child {
                display: block;
            }
        }

        @media(max-width: 768px) {
            grid-template-columns: 1fr 1.5fr;

            .left section:last-child {
                display: none;
            }
        }

        @media(max-width: 425px) {
            grid-template-columns: 1fr;

            .left {
                section:first-child {
                    display: none;
                }
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