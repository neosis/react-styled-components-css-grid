import React from 'react';
import styled from "styled-components";

const Div = styled.div`
grid-column: full-start/col-end 4;
background-color: lightgray;
`;
const StoryPicture = () => {
    return (
        <Div>
            Story Picture
        </Div>
    );
};

export default StoryPicture;
