import React, { useState } from 'react';
import { ProfileBox, ProfileContent, SendMessageContainer, SendMessageContext, TopBox, ProfileDetails, MessageBox, MessageArea, BottomBox, BottomContent, ImageInput, SendButton } from './MessageSender.styled';
import { ImCancelCircle } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { setPostItem } from '../../features/post/postSlice';

const SendMessage = ({ setIsOpen }) => {

    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [postMessage, setPostMessage] = useState('');
    const [postImageURL, setPostImageURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {
            postOwner: currentUser,
            postMessage,
            postImageURL
        };

        dispatch(setPostItem(post));
        setIsOpen(false);
    };

    return (
        <SendMessageContainer>
            <SendMessageContext>
                <TopBox>
                    <h2>
                        Gönderi Oluşturun
                    </h2>
                    <a href="/#" onClick={() => setIsOpen(false)}>
                        <ImCancelCircle size={25} color="gray" />
                    </a>
                </TopBox>

                <ProfileBox>
                    <ProfileContent>
                        <img src={currentUser.profilePic} alt="profile" />

                        <ProfileDetails>
                            <h3>
                                {currentUser.userName}
                            </h3>
                            <span>
                                {currentUser.job}
                            </span>
                        </ProfileDetails>
                    </ProfileContent>
                </ProfileBox>

                <form onSubmit={handleSubmit}>
                    <MessageBox>
                        <MessageArea value={postMessage} onChange={(e) => setPostMessage(e.target.value)} type="textarea" required placeholder='Ne hakkında konuşmak istiyorsunuz?' />
                    </MessageBox>

                    <BottomBox>
                        <BottomContent>
                            <ImageInput value={postImageURL} onChange={(e) => setPostImageURL(e.target.value)} type='url' placeholder='Resim ekle (URL)' />
                            <SendButton>
                                Yayınla
                            </SendButton>
                        </BottomContent>
                    </BottomBox>
                </form>

            </SendMessageContext>
        </SendMessageContainer>
    );
};

export default SendMessage;