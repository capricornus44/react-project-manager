const getUserEmail = state => state.auth.user?.email;
const isAuthSelector = state => state.auth.token?.accessToken;

export { getUserEmail, isAuthSelector };
