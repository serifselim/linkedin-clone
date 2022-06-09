import React from 'react';
import { Logo, SearchIcon, SearchInput, SearchBox, HeaderContainer, HeaderContent, HeaderNav, NavList, NavListItem, HeaderProfile } from './Header.styled';
import { ImHome } from 'react-icons/im';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import { RiMessage2Fill, RiLogoutCircleRFill } from 'react-icons/ri';
import { IoNotificationsSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../features/user/userSlice';

const Header = () => {

    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(clearUser());
    };

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
                            <HeaderProfile src={currentUser.profilePic} alt="profile" />
                            <span>Ben</span>
                        </NavListItem>
                        <NavListItem onClick={handleClick}>
                            <RiLogoutCircleRFill size={25} />
                            <span>Çıkış Yap</span>
                        </NavListItem>
                    </NavList>
                </HeaderNav>

            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;