import styled from 'styled-components'


export const CommunitiesBoxList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 70px 70px;
    gap: 5px;

    padding: 0 0.5rem 0.5rem;
    list-style: none;

    li {
        position: relative;
        min-height: 70px;
        
        cursor: pointer;
        
        img {
            position: absolute;
            height: 100%;
            width: 100%;

            object-fit: cover;
            border-radius: 8px;
        }

        span {
            position: absolute;
            left: 5px;
            bottom: 10px;
            width: 90%;

            color: transparent;
            font-size: 10px;
            text-overflow: ellipsis;

            z-index: 2;
            overflow: hidden;
        }

        &:first-child {
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
        }

        &:after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;

            z-index: 1;
            border-radius: 8px;
        }

        &:hover {
            span {
                color: #FFF;
            }

            &:after {
                background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), transparent);
            }
        }
    }
`

export const CommunitiesBoxFooter = styled.footer`
    margin-top: 0.5rem;
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