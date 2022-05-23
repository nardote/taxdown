export const IsAuthenticated = (user) => {
  return user ? Object.keys(user).length > 0 : false;
};
