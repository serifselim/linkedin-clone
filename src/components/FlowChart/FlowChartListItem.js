import React from 'react';
import { FlowChartItem } from './FlowChart.styled';
import { IMAGE_URL } from '../../constants/imagePaths';
import { AiOutlinePlus } from 'react-icons/ai';

const FlowChartListItem = ({ title, major, image }) => {
    return (
        <FlowChartItem>
            <img src={image} alt='' />
            <div>
                <h3>{title}</h3>
                <span> {major}</span>
                <button>
                    <AiOutlinePlus size={20} />
                    Takip Et
                </button>
            </div>
        </FlowChartItem>
    );
};

export default FlowChartListItem;