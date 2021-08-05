import styled from 'styled-components'


export const LoadingContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;

    background: ${({ theme }) => theme.background};
`