import styled from 'styled-components'


export const ProfileContainer = styled.main`
    display: grid;
    grid-template-columns: 280px 1fr 312px;
    gap: 10px;

    max-width: 1240px;

    padding: 16px;
    margin: 0 auto;

    @media(max-width: 1024px) {
        grid-template-columns: 1fr 2fr;

        > section {
            display: none;
        }
    }

    @media(max-width: 540px) {
        grid-template-columns: 1fr;
    }
`