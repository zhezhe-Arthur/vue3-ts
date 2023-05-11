import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import globalFn from "@/global";
import "element-plus/dist/index.css";
import "@/service";

const app = createApp(App);
globalFn(app);
app.use(router);
app.use(store);
app.mount("#app");

console.log(process.env.VUE_APP_BASE_NAME);
console.log(process.env);
