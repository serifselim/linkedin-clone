import React from 'react';
import { FlowChartContainer, FlowChartList } from './FlowChart.styled';
import FlowChartListItem from './FlowChartListItem';
import { FlowChartData } from '../../constants/flowChartList';

const FlowChart = () => {
    return (
        <FlowChartContainer>
            <h1>Neler Kullandım</h1>
            <FlowChartList>
                {
                    FlowChartData.map(({ title, major, image, url }, index) => (
                        <FlowChartListItem
                            key={index}
                            title={title}
                            major={major}
                            image={image}
                            url={url}
                        />
                    ))
                }
            </FlowChartList>
        </FlowChartContainer>
    );
};

export default FlowChart;