import styled from 'styled-components';

export const FlowChartContainer = styled.section`
    padding: 1.2rem;
    background-color: #fff;
        border-radius: .8rem;
        border: 1px solid rgba(0,0,0,0.1);
        height: min-content;
    & > h1{
        font-size: 1.6rem;
    }
`;

export const FlowChartList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
`;

export const FlowChartItem = styled.li`
    display: flex;

    &:not(:first-child){
        margin-top: 1.2rem;
    }

    & > img {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1.6rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & > *{
            margin-bottom: .6rem;
        }

        & > h3 {
            font-size: 1.4rem;
            font-weight: bold;
        }

        & > button {
            border-radius: 2rem;
            color: gray;
            background: none;
            border-radius: 1.8rem;
            border: 1px solid gray;
            font-size: 1.5rem;
            font-weight: 600;
            padding: .6rem 1.2rem;
            display: flex;
            align-items: center;

            &:hover{
                box-sizing: border-box;
                background-color: #EBEBEB;
                border: 1px solid black;
            }

        }

        & > span {
            color: rgba(0,0,0,0.5);
            font-size: 1.2rem;
        }
    } 




`;