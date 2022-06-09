import React from 'react';
import { FlowChartContainer, FlowChartList } from './FlowChart.styled';
import FlowChartListItem from './FlowChartListItem';
import { FlowChartData } from '../../constants/flowChartList';

const FlowChart = () => {
    return (
        <FlowChartContainer>
            <h1>Akışınıza ekleyin</h1>
            <FlowChartList>
                {
                    FlowChartData.map(({ title, major, image }, index) => (
                        <FlowChartListItem
                            key={index}
                            title={title}
                            major={major}
                            image={image}
                        />
                    ))
                }
            </FlowChartList>
        </FlowChartContainer>
    );
};

export default FlowChart;