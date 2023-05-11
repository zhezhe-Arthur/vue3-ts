import axios from "axios";

axios.interceptors.request.use((config) => {
  console.log("请求成功的拦截");
  return config;
});

axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res);
});
