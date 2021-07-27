import styled from 'styled-components'


export const ProfileInfosContainer = styled.div`
    ul {
        list-style: none;
    }

    strong {
        font-size: 1rem;
        color: ${({ theme }) => theme.secondary};
    }

    section:first-child {
        h2 {
            font-size: 1.6rem;

            @media(max-width: 540px) {
                display: none;
            }
        }

        p {
            padding: 1rem;
            font-size: 0.9rem;
        }
    }

    section:last-child {
        ul {
            padding-bottom: 1rem;
        }

        li {
            display: flex;
            padding: 0.5rem 1rem;
            font-size: 1rem;
            
            &:not(:last-child) {
                border-bottom: 2px solid ${({ theme }) => theme.background};
            }

            p {
                font-size: 0.9rem;
                line-height: 20px;
            }
        }
    }
`


export const NostalgicIconsList = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    padding: 1rem;
    gap: 10px;

    li {
        display: grid;
        grid-template-areas:
            "title title"
            "number number"; 

        font-size: 12px;
        color: ${({ theme }) => theme.title};

        /* &:not(:last-child) {
            margin-right: 20px;
        } */

        span:last-child {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            min-width: 15px;

            img {
                margin-right: 7px;
            }
        }
    }
`
