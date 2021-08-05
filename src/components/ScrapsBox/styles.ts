import styled from 'styled-components'


export const ScrapContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    margin: 0.5rem 0;
    padding: 0.5rem 0.5rem 1rem;
    
    border-bottom: 2px solid ${({ theme }) => theme.background};
    
    &:first-child {
        padding-top: 1rem;
    }

    &:last-child {
        border: 0;
        padding-bottom: 1.2rem;
    }
    
    img {
        border-radius: 50%;
        width: 70px;
    }

    a {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.secondary};
    }

    p {
        font-size: 0.9rem;
    }
`