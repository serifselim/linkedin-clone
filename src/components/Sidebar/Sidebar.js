import React from 'react';
import { StyledBackground, StyledProfileImage, StyledSidebarContainer, StyledSidebarProfile, StyledUserMajor, StyledUserNameSurname } from './Sidebar.styled';
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

        </StyledSidebarContainer>
    );
};

export default Sidebar;