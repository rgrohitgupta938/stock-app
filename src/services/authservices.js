const keyName = "user";
function login(obj) {
  let str = JSON.stringify(obj);
  sessionStorage.setItem(keyName, str);
}
function logout(obj) {
  sessionStorage.removeItem(keyName);
}
function getUser() {
  let str = sessionStorage.getItem(keyName);
  let obj = str ? JSON.parse(str) : null;
  return obj;
}
export default {
  login,
  logout,
  getUser,
};
