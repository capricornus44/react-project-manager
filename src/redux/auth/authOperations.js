import axios from 'axios';
import { signin, signup } from './authActions';

const API_KEY = 'AIzaSyCNA3Vo4X92zDlQt4W6-FnwrXBbbRb3OP0';

export const signupOperation = data => dispatch => {
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      { ...data, returnSecureToken: true },
    )
    .then(res => dispatch(signup(res.data)));
};

export const signinOperation = data => dispatch => {
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      { ...data, returnSecureToken: true },
    )
    .then(res => dispatch(signin(res.data)));
};
