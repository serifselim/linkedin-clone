import React from 'react';
import { FeedContainer, FeedList } from './Feed.styled';
import FeedItem from './FeedItem';
import { BACKGROUND_URL } from '../../imagePaths';
import { useStateValue } from '../../context/Provider';
import { fakePostsList } from '../../db/data';

const Feed = () => {

    const { state, dispatch } = useStateValue();
    const { postsList, currentUser } = state;

    return (
        <FeedContainer>
            <FeedList>
                {fakePostsList.map((post, index) => (
                    <FeedItem
                        key={index}
                        profileURL={post.profilePic}
                        name={post.userName}
                        job={post.job}
                        lastDate={post.lastDate}
                        postMessage={post.postMessage}
                        postImageURL={post.postImageURL}
                        socialMediaLink={post.socialMediaLink}
                    />
                ))}

                {postsList && postsList.map((post, index) => (
                    <FeedItem
                        key={index}
                        profileURL={post.postOwner.profilePic}
                        name={post.postOwner.userName}
                        job={post.postOwner.job}
                        lastDate="Az önce"
                        postMessage={post.postMessage}
                        postImageURL={post.postImageURL}
                    />
                ))}
            </FeedList>
        </FeedContainer>
    );
};

export default Feed;