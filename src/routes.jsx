import { Home, About, Services, Contact, Timeline } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowTrendingUpIcon,
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
    icon: ArrowTrendingUpIcon,
    name: "Timeline",
    path: "/timeline",
    element: <Timeline />,
  },
];

export default routes;
