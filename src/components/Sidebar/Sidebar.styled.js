import styled from 'styled-components';
import { BsFillBookmarkFill } from 'react-icons/bs';

export const SidebarContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.secondBgColor};
        border-radius: .8rem;
        border: 1px solid ${({ theme }) => theme.borderColor};
        height: min-content;
`;

export const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: .8rem;
    border-top-right-radius: .8rem;
    height: 5.6rem;
    width: 100%;
`;

export const SidebarProfile = styled.div`
    padding-bottom: 1.2rem;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    z-index: 99;
    text-align: center;
`;

export const ProfileImage = styled.img`
    border: 1px solid white;
    border-radius: 50%;
    width: 7.2rem;
    height: 7.2rem;
    margin: 2.2rem 0;
`;

export const ProfileTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: bold;
`;

export const ProfileMajor = styled.span`
    display: block;
    font-size: 1.2rem;
    margin-top: .8rem;
    color: ${({ theme }) => theme.inputTextColor};
`;

export const SidebarViewers = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ViewerContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child{
        margin-bottom: 1rem;
    }
`;

export const ViewerTitle = styled.span`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.inputTextColor};
    font-weight: bold;
`;

export const ViewerValue = styled.span`
    color: ${({ theme }) => theme.primaryColor};
    font-weight: bold;
    font-size: 1.3rem;
`;

export const SidebarItem = styled.div`
    display: flex;
    align-self: flex-start;
    padding: 1.2rem;
    align-items: center;
`;

export const ItemIcon = styled(BsFillBookmarkFill)`
    margin-right: 1rem;
    color:${({ theme }) => theme.textColor};
`;

export const ItemText = styled.span`
    color:${({ theme }) => theme.textColor};
    font-size: 1.2em;
    font-weight: bold;
`;