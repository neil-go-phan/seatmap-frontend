import { useContext } from "react";
import {
  NavbarContainer,
  Title,
  NavBarLink,
  Tabs,
  TabBtn,
  LogoutBtn,
} from "./style";
import { _ROUTES } from "src/constants/appRoutes";
import Auth from "src/components/navbar/auth";
import { IsLoggedContext } from "src/helpers/isLoggedContext";
import Home from "src/components/home";
import UserList from "src/components/manageUser";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import ManageSeatmap from "src/components/manageSeatmap";
interface Tab {
  tabURL: string;
  tabTitle: string;
  role: string;
  content: React.ReactNode;
}

const tabs: Tab[] = [
  {
    tabURL: _ROUTES.HOME_PAGE,
    tabTitle: "Home",
    role: "*",
    content: <Home />,
  },
  {
    tabURL: _ROUTES.HOME_PAGE,
    tabTitle: "My seatmap",
    role: "*",
    content: <Home />,
  },
  {
    tabURL: _ROUTES.USER_LIST_PAGE,
    tabTitle: "User management",
    role: "admin",
    content: <UserList />,
  },
  {
    tabURL: _ROUTES.CREATE_SEATMAP_PAGE,
    tabTitle: "Seatmap management",
    role: "admin",
    content: <ManageSeatmap />,
  },
];

const NavBar: React.FC = () => {
  //TODO: handler admin not show user list tab
  const logged = useContext(IsLoggedContext);
  const navigate = useNavigate();
  const handleTabClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    navigate((event.target as HTMLDivElement).id);
  };

  const handleLogout = () => {
    logged?.setIsLogged(false);
    Cookies.remove("refresh_token");
    Cookies.remove("access_token");
    navigate(_ROUTES.LADING_PAGE);
  };
  if (logged.isLogged) {
    return (
      <NavbarContainer>
        <NavBarLink to={_ROUTES.LADING_PAGE}>
          <Title>Seatmap</Title>
        </NavBarLink>
        <Tabs>
          {tabs.map((tab: Tab) => {
            return (
              <TabBtn
                key={`navbar_tab_${tab.tabTitle}`}
                onClick={(event) => handleTabClick(event)}
                id={tab.tabURL}
              >
                {tab.tabTitle}
              </TabBtn>
            );
          })}
        </Tabs>
        <LogoutBtn onClick={() => handleLogout()}></LogoutBtn>
      </NavbarContainer>
    );
  }
  return (
    <NavbarContainer>
      <NavBarLink to={_ROUTES.LADING_PAGE}>
        <Title>Seatmap</Title>
      </NavBarLink>
      <Auth />
    </NavbarContainer>
  );
};

export default NavBar;
