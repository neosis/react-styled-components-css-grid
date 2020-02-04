import React from 'react';
import styled from "styled-components";

const Div = styled.div`
grid-column: col-start 5/full-end;
background-color: lightgreen;
`;
const StoryContent = () => {
    return (
        <Div>
            Story Content
        </Div>
    );
};

export default StoryContent;
