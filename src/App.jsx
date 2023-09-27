import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
// import routes from "@/routes";
import { Home, About, Services, Contact, Timeline } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowTrendingUpIcon,
  UserPlusIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("global")
  const routes = [
    {
      icon: HomeIcon,
      name: t("nav.h1"),
      path: "/",
      element: <Home />,
    },
    {
      icon: UserCircleIcon,
      name: t("nav.h2"),
      path: "/about",
      element: <About />,
    },
    {
      icon: CogIcon,
      name: t("nav.h3"),
      path: "/services",
      element: <Services />,
    },
    {
      icon: UserPlusIcon,
      name: t("nav.h4"),
      path: "/contact",
      element: <Contact />,
    },
    {
      icon: ArrowTrendingUpIcon,
      name: t("nav.h5"),
      path: "/timeline",
      element: <Timeline />,
    },
  ];
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
