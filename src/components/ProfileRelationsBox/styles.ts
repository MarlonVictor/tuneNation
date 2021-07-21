import styled from 'styled-components'


export const ProfileRelationsContainer = styled.section`
    ul {
        padding-bottom: 1rem;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            gap: 1rem;

            margin: 0.5rem 1rem;

            background: ${({ theme }) => theme.card};
            cursor: default;

            &.follower-item {
                margin: 0;
                padding: 0.5rem 1rem;
                
                cursor: pointer;
                transition: filter 0.2s, background 0.2s;

                a {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                &:hover {
                    filter: brightness(0.98);
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
                    display: inline-block;
                    
                    text-overflow: ellipsis;

                    overflow: hidden;

                    @media(max-width: 540px) {
                        width: 125px;
                    }
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