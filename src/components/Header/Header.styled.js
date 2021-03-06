import styled from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6rem;
    background: ${({ theme }) => theme.secondBgColor};
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 85%;
    max-width: 1183px;
    min-height: 100%;
    margin: 0 auto;

    @media (max-width: 1128px) {
        width: 95%;
    }
`;

export const Logo = styled(BsLinkedin)`
    color: ${({ theme }) => theme.primaryColor};
    margin-right: 1rem;
`;

export const SearchBox = styled.div`
    position: relative;
    margin-left: 1rem;
    margin-right: auto;

    @media (max-width: 1128px) {
        max-width: 350px;
    }
`;

export const SearchInput = styled.input`   
    line-height: 1.75;
    font-weight: 400;
    font-size: 1.4rem;
    height: 34px;
    padding: 0 .8rem 0 4rem;
    background: ${({ theme }) => theme.firstBgColor};
    color: ${({ theme }) => theme.inputTextColor};
    border: none;
    outline: none;
    border-radius: .7rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SearchIcon = styled(BiSearchAlt2)`
    position: absolute;
    color: ${({ theme }) => theme.inputTextColor};
    top: 50%;
    left: 10px;
    transform: translateY(-50%);

    @media (max-width: 768px) {
            display: none;
    }    
`;

export const HeaderNav = styled.nav`
    width: 100%;
`;

export const NavList = styled.ul`
    display: flex;
`;

export const NavListItem = styled.li`
    cursor: pointer;
    display: flex;
    padding-inline: 1rem;
    font-size: 1.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:not(:first-child){
        color: ${({ theme }) => theme.inputTextColor};
    }

    &:hover{
        color: ${({ theme }) => theme.textColor};
    }

    & > svg, & > img {
        margin-bottom: .3rem;
    }

    & > span {
        @media (max-width: 768px) {
            display: none;
        }
    }
`;

export const ThemeIconBox = styled.div`
    margin-inline: 1rem;
`;

export const HeaderProfile = styled.img`
    border-radius: 50%;
    width: 25px;
    height: 25px;
`;

// Responive 
export const DesktopHeader = styled.div`
    display: flex;

    @media (max-width: 400px) {
        display: none;
    }

`;

export const MobileHeader = styled.div`
    display: none;

    @media (max-width: 400px) {
            display: flex;
    }
`;
