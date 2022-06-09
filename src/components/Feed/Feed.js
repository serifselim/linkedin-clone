import React from 'react';
import { FeedContainer, FeedList } from './Feed.styled';
import FeedItem from './FeedItem';
import { fakePostsList } from '../../db/data';
import { useSelector } from 'react-redux';

const Feed = () => {

    const { postsList } = useSelector(state => state.post);

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