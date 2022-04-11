import React, { useState } from 'react';
import { DirectsList, ItemText, ListItem, MessageButton, MessageContainer, Profile, SendContent, SendMessageContainer } from './MessageSender.styled';
import { IMAGE_URL } from '../../imagePaths';
import { BsImage } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io5';
import { BsFillCalendar2RangeFill, BsFileTextFill } from 'react-icons/bs';
import SendMessage from './SendMessage';

const MessageSender = ({ setIsOpen }) => {

    return (
        <MessageContainer>
            <SendContent>
                <Profile src={IMAGE_URL} />
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
    )
}

export default MessageSender;