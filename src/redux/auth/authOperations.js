import axios from 'axios';
import {
  signupRequest,
  signupError,
  signinRequest,
  signinSuccess,
  signinError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  // refreshRequest,
  // refreshSuccess,
  // refreshError,
} from './authActions';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signupOperation = user => async dispatch => {
  dispatch(signupRequest());

  try {
    await axios.post('/auth/register', user);

    dispatch(signinOperation(user));
  } catch (error) {
    dispatch(signupError(error.message));
  }
};

const signinOperation = user => async dispatch => {
  dispatch(signinRequest());

  try {
    const response = await axios.post('/auth/login', user);
    const { accessToken, refreshToken, sid } = response.data;
    // const { email, id } = response.data.data;
    // const { projects } = response.data.data;

    token.set(response.data.accessToken);
    dispatch(signinSuccess({ accessToken, refreshToken, sid }));
    // dispatch(userSuccess({ email, id }));
    // dispatch(projectsSuccess({ projects }));
  } catch (error) {
    dispatch(signinError(error.message));
  }
};

// * После успешного логаута, удаляем токен из HTTP-заголовка
const logoutOperation = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/auth/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export { signupOperation, signinOperation, logoutOperation };
