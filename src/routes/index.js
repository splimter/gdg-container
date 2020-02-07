import { Home, InfoOutlined } from "@material-ui/icons";
import HomePage from "../pages/Home";
import AboutPage from ".";

const Routes = [
  {
    path: "/home",
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
  }
];

export default Routes;
