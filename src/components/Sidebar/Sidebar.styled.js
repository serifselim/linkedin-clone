import styled from 'styled-components';

export const StyledSidebarContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: .8rem;
`;

export const StyledBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: .8rem;
    border-top-right-radius: .8rem;
    height: 5.6rem;
    width: 100%;
    object-fit: cover;
`;

export const StyledSidebarProfile = styled.div`
    padding-bottom: 1.2rem;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    z-index: 99;
    text-align: center;
`;

export const StyledProfileImage = styled.img`
    border: 1px solid white;
    border-radius: 50%;
    width: 7.2rem;
    height: 7.2rem;
    margin: 2.2rem 0;
`;

export const StyledUserNameSurname = styled.h3`
    font-size: 1.6rem;
    font-weight: bold;
`

export const StyledUserMajor = styled.span`
display: block;
    font-size: 1.2rem;
    margin-top: .8rem;
    color: rgba(0,0,0,0.5);
`;