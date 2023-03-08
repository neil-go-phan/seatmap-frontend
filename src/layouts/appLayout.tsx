import Footer from "src/components/footer";
import React, { useEffect, useState } from "react";
import NavBar from "src/components/navbar";
import { Warpper, Content, FooterWarpper } from "./style";
import { IsLoggedContext } from "src/helpers/isLoggedContext";
import { checkAuth } from "src/helpers/checkAuth";
import { useNavigate } from "react-router-dom";
import { _ROUTES } from "src/constants/appRoutes";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = (Props: Props) => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean>(false)
  useEffect(() => {
    async function checkLogIn() {
      const userChecked: boolean = await checkAuth();
      setIsLogged(userChecked)
      if (userChecked) {
        navigate(_ROUTES.HOME_PAGE)
      }
    }

    checkLogIn();
    // eslint-disable-next-line
  }, [isLogged]);

  return (
    <IsLoggedContext.Provider value={{isLogged, setIsLogged}}>
      <Warpper>
        <Content>
          <NavBar/>
          {Props.children}
        </Content>
        <FooterWarpper>
          <Footer />
        </FooterWarpper>
      </Warpper>
   </IsLoggedContext.Provider>
  );
};

export default AppLayout;
