import React from 'react';
import { Background, ProfileImage, SidebarItem, SidebarContainer, SidebarProfile, SidebarViewers, ProfileMajor, ProfileTitle, ViewerContent, ViewerTitle, ViewerValue, ItemIcon, ItemText } from './Sidebar.styled';
import { IMAGE_URL, BACKGROUND_URL } from '../../imagePaths';
import { useStateValue } from '../../context/Provider';


const Sidebar = () => {

    const { state, dispatch } = useStateValue();
    const { currentUser } = state;

    return (
        <SidebarContainer>
            <Background src={BACKGROUND_URL} />

            <SidebarProfile>
                <ProfileImage src={currentUser.profilePic} />
                <ProfileTitle>
                    {currentUser.userName}
                </ProfileTitle>
                <ProfileMajor>
                    {currentUser.job}
                </ProfileMajor>
            </SidebarProfile>

            <SidebarViewers>
                <ViewerContent>
                    <ViewerTitle>
                        Profilinizi kimler görüntüledi
                    </ViewerTitle>
                    <ViewerValue>
                        207
                    </ViewerValue>
                </ViewerContent>

                <ViewerContent>
                    <ViewerTitle>
                        Yayınınız için görüntüleme
                    </ViewerTitle>
                    <ViewerValue>
                        3.703
                    </ViewerValue>
                </ViewerContent>
            </SidebarViewers>

            <SidebarItem>
                <ItemIcon size={12} />
                <ItemText>
                    Öğelerim
                </ItemText>
            </SidebarItem>

        </SidebarContainer>
    );
};

export default Sidebar;