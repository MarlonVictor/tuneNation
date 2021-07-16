import styled from 'styled-components'


export const ProfileRelationsContainer = styled.section`
    ul {
        list-style: none;

        li {
            display: flex;
            align-items: center;
            gap: 1rem;

            margin: 0.5rem 1rem;
            cursor: default;

            &.follower-item {
                margin: 0;
                padding: 0.5rem 1rem;
                
                cursor: pointer;
                transition: background 0.2s;

                a {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                &:hover {
                    background: ${({ theme }) => theme.background};
                }          
            }

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
`

export const ProfileRelationsFooter = styled.footer`
    margin-top: 1rem;
    border-top: 2px solid ${({ theme }) => theme.background};

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

    &:hover {
        a {
            font-weight: 600;
        }
    }
`