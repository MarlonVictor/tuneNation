import styled from 'styled-components'


export const HomeContainer = styled.main`
    display: grid;
    grid-template-columns: 280px 1fr 312px;
    gap: 10px;

    max-width: 1240px;

    padding: 16px;
    margin: 0 auto;

    @media(max-width: 1024px) {
        grid-template-columns: 1fr 2fr;

        .left .popular {
            display: none;
        }
    }

    @media(max-width: 768px) {
        grid-template-columns: 1fr 1.5fr;

        .right {
            section {
                &:first-child {
                    display: none;
                }

                a img {
                    display: none;
                }
            }
        }
    }

    @media(max-width: 425px) {
        grid-template-columns: 1fr;

        .left {
            section:first-child {
                display: none;
            }
        }

        .right {
            section:last-child {
                display: none;
            }
        }
    }
`