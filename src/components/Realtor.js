import React from 'react';
import styled from "styled-components";

const Div = styled.div`
grid-column: col-start 7/full-end;
background-color: lightcyan;
`;
const Realtor = () => {
    return (
        <Div>
            Top 3 Realtors
        </Div>
    );
};

export default Realtor;
