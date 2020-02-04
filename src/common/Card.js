import React from 'react';
import styled from "styled-components";
import {H4} from "./TypographyHeadings";

const Div = styled.div`
display: grid;
grid-template-columns: [icon-start] min-content [icon-end content-start] 1fr [content-end];
grid-gap: 2rem;
`;

const Icon = styled.svg`
height: 4.8rem;
width: 4.8rem;
fill: goldenrod;
grid-column: icon-start/icon-end;
grid-row: 1/2;
`;

const Title = styled(H4)`
grid-column: content-start/content-end;
align-self: center;
`;

const Text = styled.p`
grid-column: content-start/content-end;
color: #c69963;
`;
export const DisplayCard  = ({icon, title, text}) => {
    return (
        <Div>
            <Icon> <use xlinkHref={icon} /></Icon>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Div>
    );
};

