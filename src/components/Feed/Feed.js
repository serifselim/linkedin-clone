import React from 'react';
import { FeedContainer, FeedList } from './Feed.styled';
import FeedItem from './FeedItem';
import { BACKGROUND_URL } from '../../imagePaths';
import { useStateValue } from '../../context/Provider';

const Feed = () => {

    const { state, dispatch } = useStateValue();
    const { postsList, currentUser } = state;

    return (
        <FeedContainer>
            <FeedList>
                {postsList && postsList.map(item => (
                    <FeedItem
                        profileURL={item.postOwner.profilePic}
                        name={item.postOwner.userName}
                        job={item.postOwner.job}
                        lastDate="Az önce"
                        postMessage={item.postMessage}
                        postImageURL={item.postImageURL}
                    />
                ))}
            </FeedList>
        </FeedContainer>
    );
};

export default Feed;