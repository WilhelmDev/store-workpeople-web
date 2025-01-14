export const saveUserToken = (token: string) => {
  localStorage.setItem('userToken', token);
}

export const getUserToken = () => {
  return localStorage.getItem('userToken');
}

export const removeUserToken = () => {
  localStorage.removeItem('userToken');
}

export const saveStoreName = (storeName: string) => {
  localStorage.setItem('storeName', storeName);
}