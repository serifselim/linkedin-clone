import styled from 'styled-components';

export const StyledHomeContainer = styled.main`
    width: 85%;
    max-width: 1183px;
    margin: 2.4rem auto;
    display: grid;
    grid-template-columns: 2fr 5fr 3fr;
    grid-gap: 2.4rem;
    
    & > hr{
        display: block;
        background-color: red;
        border: .1px solid #6666;
    }

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
        width: 100%;
        
        & > *{
            border-radius: 0 !important;
        } 
    }
 
`;


export const Main = styled.section`
    display: flex;
    flex-direction: column;

    & > hr{
        border: .1px solid #6666;
        margin: 2rem 0;
        border-radius: 50%;
    }
`
