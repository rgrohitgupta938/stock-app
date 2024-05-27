import axios from "axios";
function get(url) {
  return axios.get(url);
}
function post(url, obj) {
  return axios.post(url, obj);
}
function put(url, obj) {
  return axios.put(url, obj);
}
function deleteApi(url) {
  return axios.delete(url);
}
export default {
  get,
  post,
  deleteApi,
  put,
};
