import axios from 'axios';
import {
  signupRequest,
  signinRequest,
  signinSuccess,
  logoutRequest,
  logoutSuccess,
  userSuccess,
  refreshRequest,
  refreshSuccess,
} from './authActions';

import { getError } from '../error/errorHandler';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

export const token = {
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
    dispatch(
      getError({
        error,
        requestCallback: () => signupOperation(user),
        errorIdent: 'signupError',
      }),
    );
  }
};

const signinOperation = user => async dispatch => {
  dispatch(signinRequest());

  try {
    const response = await axios.post('/auth/login', user);

    const { accessToken, refreshToken, sid } = response.data;
    const { email, id } = response.data.data;

    token.set(response.data.accessToken);
    dispatch(signinSuccess({ accessToken, refreshToken, sid }));
    dispatch(userSuccess({ email, id }));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => signinOperation(user),
        errorIdent: 'signinError',
      }),
    );
  }
};

const logoutOperation = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/auth/logout');

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: logoutOperation,
        errorIdent: 'logoutError',
      }),
    );
  }
};

const refreshOperation = callback => async (dispatch, getState) => {
  const { refreshToken, sid } = getState().auth.token;

  token.set(refreshToken);
  dispatch(refreshRequest());

  try {
    const response = await axios.post('/auth/refresh', { sid: sid });

    await dispatch(
      refreshSuccess({
        accessToken: response.data.newAccessToken,
        refreshToken: response.data.newRefreshToken,
        sid: response.data.newSid,
      }),
    );
    callback && callback();
  } catch (error) {
    dispatch(logoutSuccess());
  }
};

export { signupOperation, signinOperation, logoutOperation, refreshOperation };
