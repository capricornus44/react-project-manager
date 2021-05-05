import { createAction } from '@reduxjs/toolkit';

const signup = createAction('auth/signup');
const signin = createAction('auth/signin');
const logout = createAction('auth/logout');

export { signup, signin, logout };
