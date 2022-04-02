import React from 'react';
import { StyledLogo, StyledSearchIcon, StyledSearchInput, StyledSearchBox, StyledHeaderContainer, StyledHeaderContent, StyledNav, StyledNavList, StyledNavListItem, StyledProfile } from './Header.styled';
import { ImHome } from 'react-icons/im';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { IoNotificationsSharp } from 'react-icons/io5';
import { IMAGE_URL } from '../../imagePaths';

const Header = () => {
    return (
        <StyledHeaderContainer>
            <StyledHeaderContent>
                <StyledLogo size={35} />
                <StyledSearchBox>
                    <StyledSearchIcon size={20} />
                    <StyledSearchInput placeholder='Arama yap' />
                </StyledSearchBox>

                <StyledNav>
                    <StyledNavList>
                        <StyledNavListItem active>
                            <ImHome size={25} />
                            <span>Ana Sayfa</span>
                        </StyledNavListItem>
                        <StyledNavListItem>
                            <BsPeopleFill size={25} />
                            <span>Ağım</span>
                        </StyledNavListItem>
                        <StyledNavListItem>
                            <MdOutlineWork size={25} />
                            <span>İş İlanları</span>
                        </StyledNavListItem>
                        <StyledNavListItem>
                            <RiMessage2Fill size={25} />
                            <span>Mesajlaşma</span>
                        </StyledNavListItem>
                        <StyledNavListItem>
                            <IoNotificationsSharp size={25} />
                            <span>Bildirimler</span>
                        </StyledNavListItem>
                        <StyledNavListItem>
                            <StyledProfile src={IMAGE_URL} alt="profile" />
                            <span>Ben</span>
                        </StyledNavListItem>
                    </StyledNavList>
                </StyledNav>

            </StyledHeaderContent>
        </StyledHeaderContainer>
    );
};

export default Header;