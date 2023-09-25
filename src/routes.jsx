import { Home, About, Services, Contact } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "About Us",
    path: "/about",
    element: <About />,
  },
  {
    icon: CogIcon,
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  {
    icon: UserPlusIcon,
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
