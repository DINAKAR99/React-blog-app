//isloggedIn=>
export const isloggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) return true;
  else return false;
};
//doLogin=>data=>set to local storage
export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};
//doLogout=>remove from local storage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};
export const getCurrentUserDetail = () => {
  if (isloggedIn()) {
    return JSON.parse(localStorage.getItem("data")).user;
  } else {
    return false;
  }
};

export const getToken = () => {
  if (isloggedIn()) {
    console.log(JSON.parse(localStorage.getItem("data")).jwt_token);
    return JSON.parse(localStorage.getItem("data")).jwt_token;
  } else {
    return null;
  }
};
