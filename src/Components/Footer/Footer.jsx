import React from "react";
import styled from "styled-components";
const StyledFooter = styled.footer`
    padding: 40px 10px;
    background-color: #282c34;
    color: #fff;
`;

const Footer__Item = styled.div`
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 1em;
`;

const Footer = () => {
    return <StyledFooter>
        <h2>My Contacts</h2>
        <Footer__Item>
            Tel: <a href="tel:79128411225">+7 (912) 841-12-25</a>
        </Footer__Item>
        <Footer__Item>
            Mail: <a href="mailto:remkefer@gmail.com">remkefer@gmail.com</a>
        </Footer__Item>
        <Footer__Item>
            Social: <a href="https://vk.com/1nks1">VK</a>
        </Footer__Item>
    </StyledFooter>
}
export default Footer;

