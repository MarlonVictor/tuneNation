import styled from 'styled-components'


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 100vh;    
    position: relative;

    background-image: ${({ theme }) => theme.gradient};

    header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        flex: 1;

        position: relative;
        padding: 1rem 4rem 2rem;

        color: #FFF;

        h1 {
            width: 29rem;

            font-size: 2.1rem;
            letter-spacing: 2px;
        }

        .toggle {
            position: absolute;
            top: 2rem;
            right: 4rem;

            transform: scale(1.7);
            cursor: pointer;
        }

        @media(max-width: 425px) {
            padding: 1rem 2rem 2rem;

            h1 {
                font-size: 1.9rem;
                letter-spacing: 0;
            }

            .toggle {
                right: 2rem;
                top: 2.5rem;
            }
        }
    }
    
    footer {
        flex: 1.5;
        display: flex;
        flex-direction: column;
        justify-content: center;

        background: ${({ theme }) => theme.background};

        h2 {
            padding: 2rem 4rem;
        }
        
        p {
            font-size: 1rem;
            padding: 0.2rem 4rem;

            strong {
                color: ${({ theme }) => theme.secondary};
            }
        }

        h2, p {
            transform: translateY(-3rem);
        }
    }

    @media(max-width: 1024px) {
        header {
            &::after {
                content: '';
                position: absolute;
                top: 300px;
                left: 0;
                right: 0;

                height: 80vh;
                background: ${({ theme }) => theme.background};
            }

            h1 {
                width: 100%;
                margin: 3rem 0 1rem;
            }
        }

        footer {
            display: none;
        }
    }

    @media(max-width: 425px) {
        header::after {
            height: 62vh;
        }
    }
`

export const FormContainer = styled.main`
    position: absolute;
    top: 7rem;
    bottom: 7rem;
    right: 4rem;
    
    width: 30rem;
    
    background: ${({ theme }) => theme.card};
    border-radius: 8px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

    z-index: 10;

    div {
        padding: 4rem 3.8rem 0;

        p {
            font-size: 0.9rem;
            padding-top: 0.3rem;
        }
    }

    form {
        display: flex;
        flex-direction: column;

        padding: 2rem 3.8rem;

        border-bottom: 2px solid ${({ theme }) => theme.background};

        input {
            height: 45px;
            padding: 0.5rem 1rem;
    
            border: 0;
            border-radius: 8px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
            
            font-size: 1rem;
            color: ${({ theme }) => theme.text};
            background: ${({ theme }) => theme.background};
            
            outline: none;
            transition: filter 0.2s, background 0.2s, border-color 0.2s;
    
            &:hover, &:focus {
                filter: brightness(0.98);
            }
        }
    
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
    
            padding: 0.7rem;
            
            margin: 1rem 0 2rem;
    
            border: 0;
            border-radius: 8px;
    
            font-size: 1rem;
            color: ${({ theme }) => theme.card};
            background: ${({ theme }) => theme.text};
            
            cursor: pointer;
            transition: filter 0.2s;
    
            svg {
                font-size: 1.2rem;
            }
    
            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    div:last-child {
        text-align: center;

        a {
            display: block;
            margin-top: 1rem;

            color: ${({ theme }) => theme.secondary};
        }
    }

    @media(max-width: 1024px) {
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        
        width: 90%;
        margin: 0 auto;
        margin-bottom: 2rem;

        div:last-child {
            padding-bottom: 4rem;
        }
    }

    @media(max-height: 670px) and (min-width: 1024px) {
        top: 5rem;
        bottom: 5rem;
    }

    @media(max-width: 425px) {
        width: 95%;

        form, div {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        div:last-child {
            font-size: 1.2rem;
        }
    }
`