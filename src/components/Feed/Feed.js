import React from 'react';
import { FeedContainer, FeedList } from './Feed.styled';
import FeedItem from './FeedItem';
import { BACKGROUND_URL } from '../../imagePaths';
import { useStateValue } from '../../context/Provider';

const Feed = () => {

    return (
        <FeedContainer>
            <FeedList>
                <FeedItem
                    profileURL={''}
                    name="Yavuz Selim Şerifoğlu"
                    major="Example user title"
                    lastDate="2 gün önce"
                    postImageURL={BACKGROUND_URL}
                />,
                <FeedItem
                    profileURL={''}
                    name="Yavuz Selim Şerifoğlu"
                    major="Example user title"
                    lastDate="2 gün önce"
                />
            </FeedList>
        </FeedContainer>
    );
};

export default Feed;