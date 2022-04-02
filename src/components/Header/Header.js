import React from 'react';
import { Logo, SearchIcon, SearchInput, SearchBox, HeaderContainer, HeaderContent, HeaderNav, NavList, NavListItem, HeaderProfile } from './Header.styled';
import { ImHome } from 'react-icons/im';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { IoNotificationsSharp } from 'react-icons/io5';
import { IMAGE_URL } from '../../imagePaths';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo size={35} />
                <SearchBox>
                    <SearchIcon size={20} />
                    <SearchInput placeholder='Arama yap' />
                </SearchBox>

                <HeaderNav>
                    <NavList>
                        <NavListItem active>
                            <ImHome size={25} />
                            <span>Ana Sayfa</span>
                        </NavListItem>
                        <NavListItem>
                            <BsPeopleFill size={25} />
                            <span>Ağım</span>
                        </NavListItem>
                        <NavListItem>
                            <MdOutlineWork size={25} />
                            <span>İş İlanları</span>
                        </NavListItem>
                        <NavListItem>
                            <RiMessage2Fill size={25} />
                            <span>Mesajlaşma</span>
                        </NavListItem>
                        <NavListItem>
                            <IoNotificationsSharp size={25} />
                            <span>Bildirimler</span>
                        </NavListItem>
                        <NavListItem>
                            <HeaderProfile src={IMAGE_URL} alt="profile" />
                            <span>Ben</span>
                        </NavListItem>
                    </NavList>
                </HeaderNav>

            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;