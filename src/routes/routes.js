import config from "~/config";
import home from "~/pages/home";
import login from "~/pages/login";

const publicRoutes = [
  {
    path: config.routes.login,
    component: login,
    layout: null,
  },
  {
    path: config.routes.home,
    component: home,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
