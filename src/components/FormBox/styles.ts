import styled from 'styled-components'


export const FormBoxContainer = styled.form`
    textarea {
        width: 100%;
        min-height: 100px;
        padding: 0.5rem;

        font-size: 1rem;
        color: ${({ theme }) => theme.text};
        background: transparent;
    
        border-radius: 8px 8px 0 0;
        border: 0;
        outline: none;
        resize: vertical;
    }

    .create-community-wrapper {
        display: flex;
        flex-direction: column;

        height: 104px;

        input {
            flex: 1;
            padding: 0 0.5rem;

            font-size: 1rem;

            border: 0;
            outline: none;

            &:last-child {
                border-top: 2px solid ${({ theme }) => theme.background};
            }
        }
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        border-top: 2px solid ${({ theme }) => theme.background};

        > button {
            border: 0;
            background: transparent;
            transform: translateY(2px);

            svg {
                margin: 0 1rem;

                font-size: 1.7rem;
                color: ${({ theme }) => theme.primary};

                cursor: pointer;
                transition: transform 0.2s;

                &:hover {
                    transform: translateX(3px);
                }
            }
        }
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        padding: 0.5rem;

        font-size: 1rem;
        font-weight: 500;
        color: ${({ theme }) => theme.title};
        background: ${({ theme }) => theme.card};

        border: 0;
        border-top: 1px solid ${({ theme }) => theme.background};
        border-radius: 0 0 8px 8px;

        cursor: pointer;
        
        svg {
            font-size: 1.2rem;
        }

        &.selected {
            background: ${({ theme }) => theme.button};
            border-bottom: 1px solid transparent;
        }

        &:hover {
            filter: brightness(0.97);
        }
    }
`