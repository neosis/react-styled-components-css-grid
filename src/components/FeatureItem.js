import React from 'react';
import styled from "styled-components";
import {DisplayCard} from "../common/Card";
const Li = styled.li`
list-style: none;
`;
const FeatureItem = ({feature}) => {
    return (
        <Li>
            <DisplayCard icon={feature.image} title={feature.title} text={feature.text} />
        </Li>
    );
};

export default FeatureItem;
