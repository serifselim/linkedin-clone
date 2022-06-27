import React from 'react';
import { BsImage } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io5';
import { BsFillCalendar2RangeFill, BsFileTextFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {
    DirectsList,
    ItemText,
    ListItem,
    MessageButton,
    MessageContainer,
    Profile,
    SendContent
} from './MessageSender.styled';

const MessageSender = ({ setIsOpen }) => {

    const { currentUser } = useSelector(state => state.user);

    return (
        <MessageContainer>
            <SendContent>
                <Profile src={currentUser.profilePic} />
                <MessageButton onClick={() => setIsOpen(true)}>
                    Gönderi başlat
                </MessageButton>


            </SendContent>
            <DirectsList>
                <ListItem>
                    <BsImage size={20} color="blue" />
                    <ItemText>
                        Fotoğraflar
                    </ItemText>
                </ListItem>
                <ListItem>
                    <IoLogoYoutube size={20} color="green" />
                    <ItemText>
                        Video
                    </ItemText>
                </ListItem>
                <ListItem>
                    <BsFillCalendar2RangeFill size={20} color="orange" />
                    <ItemText>
                        Etkinlik
                    </ItemText>
                </ListItem>
                <ListItem>
                    <BsFileTextFill size={20} color="red" />
                    <ItemText>
                        Yazı yaz
                    </ItemText>
                </ListItem>
            </DirectsList>
        </MessageContainer>
    );
};

export default MessageSender;