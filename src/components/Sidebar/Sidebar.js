import React from 'react';
import { StyledBackground, StyledProfileImage, StyleSidebardItems, StyledSidebarContainer, StyledSidebarProfile, StyledSidebarViewers, StyledUserMajor, StyledUserNameSurname, StyledViewersDetails, StyledViewerTitle, StyledViewerValue, StyledItemIcon, StlyedItemText } from './Sidebar.styled';
import { IMAGE_URL, BACKGROUND_URL } from '../../imagePaths';


const Sidebar = () => {
    return (
        <StyledSidebarContainer>
            <StyledBackground src={BACKGROUND_URL} />

            <StyledSidebarProfile>
                <StyledProfileImage src={IMAGE_URL} />
                <StyledUserNameSurname>
                    Yavuz Selim Şerifoğlu
                </StyledUserNameSurname>
                <StyledUserMajor>
                    Frontend Developer
                </StyledUserMajor>
            </StyledSidebarProfile>

            <StyledSidebarViewers>
                <StyledViewersDetails>
                    <StyledViewerTitle>
                        Profilinizi kimler görüntüledi
                    </StyledViewerTitle>
                    <StyledViewerValue>
                        207
                    </StyledViewerValue>
                </StyledViewersDetails>

                <StyledViewersDetails>
                    <StyledViewerTitle>
                        Yayınınız için görüntüleme
                    </StyledViewerTitle>
                    <StyledViewerValue>
                        3.703
                    </StyledViewerValue>
                </StyledViewersDetails>
            </StyledSidebarViewers>

            <StyleSidebardItems>
                <StyledItemIcon size={12} />
                <StlyedItemText>
                    Öğelerim
                </StlyedItemText>
            </StyleSidebardItems>

        </StyledSidebarContainer>
    );
};

export default Sidebar;