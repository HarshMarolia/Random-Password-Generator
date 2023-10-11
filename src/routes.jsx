import { Home, About, Services, Contact,  Library } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  BuildingLibraryIcon,
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
  {
    icon: BuildingLibraryIcon,
    name: "Library",
    path: "/library",
    element: <Library />,
  },
];

export default routes;
