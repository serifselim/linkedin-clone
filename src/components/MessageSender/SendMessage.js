import React from 'react';
import { ProfileBox, ProfileContent, SendMessageContainer, SendMessageContext, TopBox, ProfileDetails, MessageBox, MessageArea, BottomBox, BottomContent, ImageInput, SendButton } from './MessageSender.styled';
import { ImCancelCircle } from 'react-icons/im';
import { IMAGE_URL } from '../../imagePaths';

const SendMessage = ({ setIsOpen }) => {
    return (
        <SendMessageContainer>
            <SendMessageContext>
                <TopBox>
                    <h2>
                        Gönderi Oluşturun
                    </h2>
                    <a href="#" onClick={() => setIsOpen(false)}>
                        <ImCancelCircle size={25} color="gray" />
                    </a>
                </TopBox>

                <ProfileBox>
                    <ProfileContent>
                        <img src={IMAGE_URL} alt="profile" />

                        <ProfileDetails>
                            <h3>
                                Yavuz Selim Şerifoğlu
                            </h3>
                            <span>
                                Frontend Developer
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