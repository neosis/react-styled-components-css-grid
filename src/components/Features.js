import React from 'react';
import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import featursedata from "../data/Featuresdata";

const Div = styled.div`
grid-column: center-start/center-end;
//background-color: lightgoldenrodyellow;
padding: 4rem 0;

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 4rem;
`;


const Features = () => {
    return (
        <Div>
            { featursedata.map((feature,index) => <FeatureItem key={index.toString()} feature={feature} /> ) }
        </Div>
    );
};

export default Features;
