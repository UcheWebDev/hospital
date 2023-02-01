import axios from "axios";
const BaseApi = axios.create({
  baseURL: "https://api.seftonhospital.com/api",
});
const Api = ()  => {
  let token = localStorage.getItem("token");
  if (token) {
    BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return BaseApi;
};
export default Api;
