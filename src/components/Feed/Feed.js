import React from 'react';
import { FeedContainer, FeedList, FeedListItem } from './Feed.styled';
import FeedItem from './FeedItem';

import { BACKGROUND_URL, IMAGE_URL } from '../../imagePaths';

const Feed = () => {
    return (
        <FeedContainer>
            <FeedList>
                <FeedItem
                    profileURL={IMAGE_URL}
                    name="Yavuz Selim Şerifoğlu"
                    major="Example user title"
                    lastDate="2 gün önce"
                    postImageURL={BACKGROUND_URL}
                />,
                <FeedItem
                    profileURL={IMAGE_URL}
                    name="Yavuz Selim Şerifoğlu"
                    major="Example user title"
                    lastDate="2 gün önce"
                />
            </FeedList>
        </FeedContainer>
    );
};

export default Feed;