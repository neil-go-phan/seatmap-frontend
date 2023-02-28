import Footer from "src/components/footer";
import React from "react";
import NavBar from "src/components/navbar";
import { Warpper, Content, FooterWarpper } from "./style";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = (Props: Props) => {
  return (
    <Warpper>
      <Content>
        <NavBar />
        {Props.children}
      </Content>
      <FooterWarpper>
        <Footer />
      </FooterWarpper>
    </Warpper>
  );
};

export default AppLayout;
