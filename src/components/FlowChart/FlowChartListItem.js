import React from 'react';
import { FlowChartItem } from './FlowChart.styled';
import { AiOutlinePlus } from 'react-icons/ai';

const FlowChartListItem = ({ title, major, image, url }) => {
    return (
        <FlowChartItem>
            <img src={image} alt='' />
            <div>
                <h3>{title}</h3>
                <span> {major}</span>
                <a href={url}>
                    <AiOutlinePlus size={20} />
                    Siteye Git
                </a>
            </div>
        </FlowChartItem>
    );
};

export default FlowChartListItem;