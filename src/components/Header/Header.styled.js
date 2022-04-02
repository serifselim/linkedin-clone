import styled from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6rem;
    background: white;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 85%;
    max-width: 1183px;
    min-height: 100%;
    margin: 0 auto;
`;

export const Logo = styled(BsLinkedin)`
    color: #0F66C3;
    margin-right: 1rem;
`;

export const SearchBox = styled.div`
    position: relative;
    max-width: 280px;
`;

export const SearchInput = styled.input`   
    width: 100%;
    line-height: 1.75;
    font-weight: 400;
    font-size: 1.4rem;
    height: 34px;
    padding: 0 .8rem 0 4rem;
    background-color: #EEF3F8;
    border: none;
    outline: none;
    border-radius: .7rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SearchIcon = styled(BiSearchAlt2)`
    position: absolute;
    color: #606163;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);

    @media (max-width: 768px) {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
    }    
`

export const HeaderNav = styled.nav`
    margin-left: auto;
`;

export const NavList = styled.ul`
    display: flex;
`;

export const NavListItem = styled.li`
    display: flex;
    padding: 1rem;
    font-size: 1.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${({ active }) => active ? '#191919' : '#666666'};

    &:hover{
        color: #191919;
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

export const HeaderProfile = styled.img`
    border-radius: 50%;
    width: 25px;
    height: 25px;
`;

