import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.header`
grid-column: full-start/col-end 6;
background-color: lightblue;
`;
const Header = () => {
    return (
        <HeaderContainer>
            Header
        </HeaderContainer>
    );
};

export default Header;
