import styled from 'styled-components'
import { ProfileImage, ProfileMajor, ProfileTitle } from '../Sidebar/Sidebar.styled';

export const FeedContainer = styled.section`

`;

export const FeedList = styled.ul`
    display: flex;
    flex-direction: column-reverse;
`;

export const ListItem = styled.li`
    background-color: #fff;
    border-radius: .8rem;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 1rem;
`;

export const ProfileBox = styled.div`
    display: flex;
    align-items: center;
    margin: 1.2rem 1.6rem .8rem 1.6rem;
`;

export const UserImage = styled(ProfileImage)`
    width: 4.8rem;
    height: 4.8rem;
    margin: 0;
    margin-right: .8rem;
`;

export const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserName = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
`;

export const UserMajor = styled(ProfileMajor)`
    margin: .1rem 0;
`;

export const DateTime = styled(UserMajor)`
    font-size: 1.15rem;
`;

export const ContentsBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: auto;
`;

export const ContentText = styled.p`
    font-size: 1.4rem;
    margin: 0 1.6rem;
    line-height: 1.6;
`;

export const ContentImage = styled.img`
    width: 100%;
    max-height: 60rem;
    margin-top: .8rem;
    margin-bottom: 2.4rem;
    object-fit: cover;
`;

export const FeedbacksBox = styled.div`
    display: flex;
    padding: .4rem 1.2rem;
    width: 100%;
`;

export const FeedbackButton = styled.button`
    cursor: pointer;
    flex: 1;
    padding: 1rem .8rem;
    font-size: 1.4rem;
    font-weight: bold;
    color: gray;
    border: none;
    background-color: white;
    border-top: .1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg{
        margin-right: .4rem;

        @media screen {
            
        }
    }

    & > *:not(svg) {
        @media (max-width: 930px) {
            display: none;
        }
    }

    &:hover{
        opacity: .8;
    }
`;
