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
import { loaderOff, loaderOn } from '../loading/loadingAction';
import { getProjectSuccess } from '../projects/projectActions';

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

  dispatch(loaderOn());
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
  } finally {
    dispatch(loaderOff());
  }
};

const signinOperation = user => async dispatch => {
  dispatch(signinRequest());

  dispatch(loaderOn());
  try {
    const response = await axios.post('/auth/login', user);

    const { accessToken, refreshToken, sid } = response.data;
    const { email, id } = response.data.data;

    token.set(response.data.accessToken);
    dispatch(signinSuccess({ accessToken, refreshToken, sid }));
    dispatch(userSuccess({ email, id }));
    dispatch(getProjectSuccess(response.data.data.projects));
  } catch (error) {
    dispatch(
      getError({
        error,
        requestCallback: () => signinOperation(user),
        errorIdent: 'signinError',
      }),
    );
  } finally {
    dispatch(loaderOff());
  }
};

const logoutOperation = () => async dispatch => {
  dispatch(logoutRequest());

  dispatch(loaderOn());
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
  } finally {
    dispatch(loaderOff());
  }
};

const refreshOperation = callback => async (dispatch, getState) => {
  const { refreshToken, sid } = getState().auth.token;

  token.set(refreshToken);
  dispatch(refreshRequest());

  dispatch(loaderOn());
  try {
    const response = await axios.post('/auth/refresh', { sid: sid });

    await dispatch(
      refreshSuccess({
        accessToken: response.data.newAccessToken,
        refreshToken: response.data.newRefreshToken,
        sid: response.data.newSid,
      }),
    );
    token.set(response.data.newAccessToken);
    callback && callback();
  } catch (error) {
    dispatch(logoutSuccess());
  } finally {
    dispatch(loaderOff());
  }
};

export { signupOperation, signinOperation, logoutOperation, refreshOperation };
