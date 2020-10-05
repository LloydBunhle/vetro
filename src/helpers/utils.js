export const setUserSession = (token, id) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('userId', id);
}

export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}


export const getId = () => {
  return sessionStorage.getItem('userId')
}