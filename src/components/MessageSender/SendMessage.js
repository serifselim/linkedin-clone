import React from 'react';
import { ProfileBox, ProfileContent, SendMessageContainer, SendMessageContext, TopBox, ProfileDetails, MessageBox, MessageArea, BottomBox, BottomContent, ImageInput, SendButton } from './MessageSender.styled';
import { ImCancelCircle } from 'react-icons/im';
import { useStateValue } from '../../context/Provider';

const SendMessage = ({ setIsOpen }) => {

    const { state, dispatch } = useStateValue();
    const { currentUser } = state;

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

                <form onSubmit={() => setIsOpen(false)}>
                    <MessageBox>
                        <MessageArea type="textarea" placeholder='Ne hakkında konuşmak istiyorsunuz?' />
                    </MessageBox>

                    <BottomBox>
                        <BottomContent>
                            <ImageInput type='text' placeholder='Resim ekle (URL)' />
                            <SendButton type="submit">
                                Yayınla
                            </SendButton>
                        </BottomContent>
                    </BottomBox>
                </form>

            </SendMessageContext>
        </SendMessageContainer>
    )
}

export default SendMessage