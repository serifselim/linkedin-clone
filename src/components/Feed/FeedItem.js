import React from 'react';
import { FEED_IMAGE_URL } from '../../imagePaths';
import { DateTime, ListItem, UserMajor, UserImage, ProfileBox, UserName, UserDetails, ContentsBox, ContentText, ContentImage, FeedbacksBox, FeedbackButton } from './Feed.styled';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { RiSendPlaneFill } from 'react-icons/ri';


const FeedItem = ({ profileURL, name, major, lastDate, postImageURL }) => {
    return (
        <ListItem>
            <ProfileBox>
                <UserImage src={profileURL} />
                <UserDetails>
                    <UserName>
                        {name}
                    </UserName>
                    <UserMajor>
                        {major}
                    </UserMajor>
                    <DateTime>
                        {lastDate}
                    </DateTime>
                </UserDetails>
            </ProfileBox>

            <ContentsBox>
                <ContentText>
                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </ContentText>
                {postImageURL &&
                    <ContentImage src={postImageURL} />
                }
            </ContentsBox>

            <FeedbacksBox>
                <FeedbackButton>
                    <BiLike size={24} />
                    <span>Beğen</span>
                </FeedbackButton>
                <FeedbackButton>
                    <FaRegCommentDots size={24} />
                    <span>Yorum Yap</span>
                </FeedbackButton>
                <FeedbackButton>
                    <RiShareForwardLine size={24} />
                    <span>Paylaş</span>
                </FeedbackButton>
                <FeedbackButton>
                    <RiSendPlaneFill size={24} />
                    <span>Gönder</span>
                </FeedbackButton>
            </FeedbacksBox>
        </ListItem>
    );
};

export default FeedItem;