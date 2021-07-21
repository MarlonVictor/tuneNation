import styled from 'styled-components'


export const ProfileSidebarContainer = styled.section`
    display: flex;
    flex-direction: column;

    text-align: center;

    header {
        margin: 0 auto;
        width: 100%;

        img {
            width: 130px;
            margin: 2rem auto 1rem;

            border-radius: 50%;
        }

        h3 {
            padding: 0 1rem 0;

            font-size: 1.4rem;
            color: ${({ theme }) => theme.title};
        }

        span {
            font-size: 1rem;
            color: ${({ theme }) => theme.border};
        }

        .infos {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;

            border-top: 2px solid ${({ theme }) => theme.background};

            div:not(:last-child) {
                border-right: 2px solid ${({ theme }) => theme.background};
            }

            div {
                flex: 1;
            }

            h3 {
                padding-top: 0.8rem;
            }

            span {
                display: inline-block;
                padding-bottom: 0.8rem;
                
                font-size: 0.7rem;
                text-overflow: ellipsis;

                overflow: hidden;

                @media(max-width: 540px) {
                    width: 40px;
                }
            }
        }
    }

`