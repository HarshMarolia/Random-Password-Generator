import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  const [t, i18n] = useTranslation("global")
  title = t("footer.h1");
  description = t("footer.h2");
  menus = [
    {
      name: t("footer.h3"),
      items: [
        { name: "communications@bhoomiai.com", path: "mailto:communications@bhoomiai.com" },
        { name: "+91-7903873487", path: "tel: 7903873487" },
      ],
    },
    {
      name: t("footer.h4"),
      items: [
        {
          name: t("footer.h5"),
          path: "",
        },
      ],
    },
  ]

  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          {/* <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
          <div className="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 lg:gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Bhoomi AI",
  description:
    "We are an agri-tech startup founded by the graduates and professionals from India, US, Canada.",
  socials: [
    {
      color: "blue",
      name: "facebook",
      path: "https://www.facebook.com/CreativeTim",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "blue",
      name: "linkedin",
      path: "https://www.linkedin.com/company/bhoomi-ai/",
    },
    {
      color: "green",
      name: "whatsapp",
      path: "https://api.whatsapp.com/send?phone=+919334487640",
    },
  ],
  menus: [
    {
      name: "Get In Touch",
      items: [
        { name: "communications@bhoomiai.com", path: "mailto:communications@bhoomiai.com" },
        { name: "+91-7903873487", path: "tel: 7903873487" },
      ],
    },
    {
      name: "Drop By",
      items: [
        {
          name: "New Delhi, India",
          path: "",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} {" "}
      <a
        href="https://bhoomiai.com/"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Bhoomi AI
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
