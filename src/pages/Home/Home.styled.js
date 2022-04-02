import styled from 'styled-components';

export const StyledHomeContainer = styled.main`
    width: 85%;
    max-width: 1183px;
    margin: 2.4rem auto;
    display: grid;
    grid-template-columns: 2fr 5fr 3fr;
    grid-gap: 2.4rem;

    & > *:last-child{
        @media (max-width: 768px) {
            display: none;
        } 
    }

    @media (max-width: 930px) {
        grid-template-columns: 1fr 2fr;
         & > *:last-child{
             display: none;
         }   
    }

    @media (max-width: 738px) {
        grid-template-columns: 1fr;
    }
 
`;