import styled from 'styled-components'


export const PopularProfilesContainer = styled.section`
    ul {
        list-style: none;

        li {
            display: flex;
            align-items: center;
            gap: 1rem;

            margin: 0.5rem 1rem;

            img {
                width: 40px;
                border-radius: 50%;
            }

            div {
                display: flex;
                flex-direction: column;

                font-weight: 500;

                span {
                    font-size: 1rem;
                }

                a {
                    font-size: 0.8rem;
                    color: ${({ theme }) => theme.secondary};

                    &:hover {
                        font-weight: 600;
                    }
                }
            }
        }
    }

    footer {
        margin-top: 1rem;
        border-top: 2px solid ${({ theme }) => theme.background};

        &:hover {
            a {
                font-weight: 600;
            }
        }
        
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
    
            font-size: 1rem;
            padding: 10px 0;
            font-weight: 500;

            svg {
                font-size: 1.1rem;
            }
        }
    }
`