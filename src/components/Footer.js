import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.footer`
grid-column: full-start/full-end;
background-color: lightseagreen;  
`;
const Footer = () => {
    return (
        <FooterContainer>
            Footer
        </FooterContainer>
    );
};

export default Footer;
