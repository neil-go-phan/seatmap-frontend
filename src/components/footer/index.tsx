import React from "react";
import { FooterContainer, Contact, CompanyLogo, Link } from "./style";
import logo from "./golden-owl-logo.jpg";
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Contact>Contact: neil.phan.goldenowl@gmail.com</Contact>
      <Link href="https://goldenowl.asia/" target="_blank">
        <CompanyLogo src={logo} />
      </Link>
    </FooterContainer>
  );
};

export default Footer;
