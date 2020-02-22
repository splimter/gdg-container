import { Home, InfoOutlined, Pages } from "@material-ui/icons";
import HomePage from "../views/Home/Home";

import AboutPage from "../views/About/About";
import ArticlesPage from "../views/Articles/Archive";

const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    navbarName: "Home",
    icon: Home,
    component: HomePage
  },
  {
    path: "/about",
    sidebarName: "About",
    navbarName: "about",
    icon: InfoOutlined,
    component: AboutPage
  },
  {
    path: "/articles",
    sidebarName: "Articles",
    navbarName: "articles",
    icon: Pages,
    component: ArticlesPage
  } 
];

export default Routes;
