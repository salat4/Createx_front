const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

export const authSelectors = {
   getIsLoggedIn,
   getUserName,
   getToken,
   getIsFetchingCurrentUser
 };