import React from 'react';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { RiSendPlaneFill } from 'react-icons/ri';
import {
    DateTime,
    ListItem,
    UserMajor,
    UserImage,
    ProfileBox,
    UserName,
    UserDetails,
    ContentsBox,
    ContentText,
    ContentImage,
    FeedbacksBox,
    FeedbackButton
} from './Feed.styled';

const FeedItem = ({ profileURL, name, job, lastDate, socialMediaLink, postMessage, postImageURL }) => {
    return (
        <ListItem>
            <ProfileBox>
                <UserImage src={profileURL} />
                <UserDetails>
                    <UserName>
                        {socialMediaLink ? <a href={socialMediaLink}>{name}</a> : name}
                    </UserName>
                    <UserMajor>
                        {job}
                    </UserMajor>
                    <DateTime>
                        {lastDate}
                    </DateTime>
                </UserDetails>
            </ProfileBox>

            <ContentsBox>
                <ContentText>
                    {postMessage}
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