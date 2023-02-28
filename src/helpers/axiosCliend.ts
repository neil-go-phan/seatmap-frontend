import axios from 'axios'
import {_ROUTES} from 'src/constants/appRoutes'

// const unProtectedRoutes = [
//   _ROUTES.SIGN_IN_PAGE,
//   _ROUTES.SIGN_UP_PAGE,
// ]

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

export default axiosClient;