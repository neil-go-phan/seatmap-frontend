import axios from 'axios'
// import {_ROUTES} from 'src/constants/appRoutes'
import Cookies from 'js-cookie'
import { _ROUTES } from 'src/constants/appRoutes';
// const unProtectedRoutes = [
//   _ROUTES.SIGN_IN_PAGE,
//   _ROUTES.SIGN_UP_PAGE,
// ]

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  async (config: any) => {
    const token = Cookies.get('access_token');
    if (token) {
      config.headers = {
        'x-access-token': token,
      };
    }
    return config;
  },
  (error: any) => {
    return error;
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error: any) => {
    const config = error?.config;
    try {
      if (
        error.response.status === 401 &&
        !config?.sent &&
        error.response.data.message === 'Unauthorized access'
      ) {
        config.sent = true;
        const res = await newToken();

        if (res?.data) {
          Cookies.set('access_token', res.data.accessToken);
          config.headers = {
            'x-access-token': res.data.accessToken,
          };
        }
        return config;
      }
    } catch (err) {
      Cookies.remove('refresh_token');
      Cookies.remove('access_token');
    }
    Cookies.remove('refresh_token');
    Cookies.remove('access_token');
    // TODO: Redirect to home page 
    // if (!unProtectedRoutes.includes(window.location.pathname)) {
      window.location.href = _ROUTES.LADING_PAGE;
    // }
    return error;
  }
);

const newToken = async () => {
  const token = Cookies.get('refresh_token');
  if (token) {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}auth/token`,
        {
          headers: {
            'x-refresh-token': token,
          },
        }
      );
      return res;
    } catch (error) {
      throw error;
    }
  }
};

export default axiosClient;