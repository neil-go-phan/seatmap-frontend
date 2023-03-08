import LadingPage from "src/components/ladingPage";
import AppLayout from "src/layouts/appLayout";
import { _ROUTES } from "src/constants/appRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/components/home";
import UserList from "src/components/userList";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path={_ROUTES.LADING_PAGE} element={<LadingPage />} />
          <Route path={_ROUTES.HOME_PAGE} element={<Home />} />
          <Route path={_ROUTES.USER_LIST_PAGE} element={<UserList />} />
          {/* <Route path={urlResource.LINK_TO_LOGIN_PAGE} element={<Login handleLogin={handleLogin} />} /> */}
          {/* <Route path='*' element={<NotFoundPage />} /> */}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
