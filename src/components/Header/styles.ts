import styled from 'styled-components'


export const HeaderContainer = styled.header`
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.title};

    div {
        display: flex;
        align-items: center;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 1240px;
        height: 50px;

        margin: 0 auto;
        padding: 0 1rem;
    }

    .toggle-theme {
        margin: 0 2rem;
        font-size: 1.4rem;

        cursor: pointer;
        transition: color 0.2s;

        &.light:hover {
            color: ${({ theme }) => theme.primary};
        }

        &.dark:hover {
            color: ${({ theme }) => theme.secondary};
        }
    }
`

export const InputContent = styled.div`
    margin-left: 2rem;
    margin-right: 1rem;
    height: 30px;

    color: ${({ theme }) => theme.border};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;

    svg {
        font-size: 1.4rem;
        margin: 0 5px;
    }

    input {
        font-size: 1rem;

        border: 0;
        outline: none;

        &::placeholder {
            color: ${({ theme }) => theme.border};
        }
    }
`

export const NavigationAnchors = styled.div`
    a {
        position: relative;
        margin: 0 0.5rem;

        font-weight: 500;

        &:hover:not(.active) {
            filter: brightness(0.8);
            font-weight: 600;
        }
        
        &.active {
            font-weight: 600;

            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: -5px;
                width: 60%;
                height: 2px;

                background: ${({ theme }) => theme.primary};
            }
        }
    }
`

export const ToggleMenu = styled.div`
    position: relative;
    height: 50px;
    gap: 0.5rem;
    
    cursor: pointer;
    background: ${({ theme }) => theme.card};

    img {
        width: 30px;
        border-radius: 50%;
    }

    span {
        font-size: 0.9rem;
        font-weight: 500;
    }

    .arrow {
        font-size: 1.4rem;
        transition: transform 0.2s;
    }

    div {
        justify-content: center;
        position: absolute;
        top: 50px;

        width: 100%;
        height: 30px;

        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        background: ${({ theme }) => theme.card};

        visibility: hidden;
        transition: font-weight 0.2s;

        a {
            display: flex;
            align-items: center;
            padding-bottom: 10px;

            font-size: 1rem;

            svg {
                margin-left: 0.5rem;
                font-size: 1rem;
            }
        }

        &:hover {
            font-weight: 600;
        }
    }

    &:hover {
        .arrow {
            transform: rotate(180deg);
        }

        div {
            visibility: visible;
        }
    }
`