const getUserEmail = state => state.auth.user?.email;
const isAuthSelector = state => state.auth.token?.accessToken;
const getAuthError = state => state.auth?.error;

export { getUserEmail, isAuthSelector, getAuthError };
