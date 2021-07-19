import styled, { css } from 'styled-components'


const BasicInputStyle = css`
    padding: 0.5rem 1rem;

    border: 0;
    border-bottom: 2px solid ${({ theme }) => theme.background};
    
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    
    background: ${({ theme }) => theme.card};
    
    outline: none;
    transition: filter 0.2s, background 0.2s, border-color 0.2s;

    &:hover, &:focus {
        filter: brightness(0.98);
    }
`

export const FormBoxContainer = styled.form`
    textarea {
        width: 100%;
        min-height: 135px;
    
        border-radius: 8px 8px 0 0;
        resize: vertical;

        ${BasicInputStyle}
    }

    div {
        display: flex;
        flex-direction: column;
        
        input {
            height: 45px;
            ${BasicInputStyle}
        }
    }
`

export const ButtonContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.4rem 1rem 0.5rem;

    button {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        padding: 0.5rem;

        border: 0;
        border-radius: 8px;

        font-size: 1rem;
        color: ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.button};
        
        cursor: pointer;
        transition: filter 0.2s;

        svg {
            font-size: 1.2rem;
        }

        &.submit {
            color: ${({ theme }) => theme.primary};
            background: transparent;

            svg {
                font-size: 1.7rem;
            }
        }

        &:hover {
            filter: brightness(0.9);
        }
    }
`