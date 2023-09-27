import { Card, CardBody, CardHeader, Avatar, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { Footer } from "@/widgets/layout";
import { UsersIcon } from "@heroicons/react/24/solid";
import service1 from '../img/image1.jpg';
import service2 from '../img/image3.jpg';
import service3 from '../img/fasal.png';
import { ImgWithRoundedCorners } from "@/widgets/layout/imgWithRoundedCorners";
import { useTranslation } from "react-i18next";


export function Services() {
  const [t, i18n] = useTranslation("global")
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="mt-20 container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/bhoomilogo.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                {t("services.h1")}
                </Typography>
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                {/* <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    Bhoomi AI Solutions is a tech startup with its root in rural India. Our team members have 10 years of work experience in Web 3.0, Blockchain, and large-scale AI model deployment.
                    </Typography>
                  </div>
                </div> */}
              </div>

              <div className="mt-10 flex flex-wrap items-center">
                <div className="mx-auto sm:mt-12 lg:mt-10 flex lg:basis-3/6 w-full justify-center px-4 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-3/12">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={service1}
                    alt="nature image"
                  />
                </div>
                <div className="mx-auto lg:basis-2/5 w-full sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-6/12 px-4 mt-4 sm:mt-0">
                  <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                  {t("services.h2")}
                  </Typography>
                  <Typography className="mb-4 sm:mb-8 font-normal text-blue-gray-500">
                  {t("services.h3")}
                  </Typography>
                  <a href="https://forms.gle/VwZxzQ1NC1b9uNHC7">
                    <Button variant="outlined">{t("services.h4")}</Button>
                  </a>
                </div>
              </div>
              {/* Service 2 */}
              <div className="mt-10 sm:mt-24 lg:mt-24 flex flex-wrap items-center">
                <div className="mx-auto mt-6 sm:mt-12 lg:mt-0 flex lg:basis-3/6 w-full justify-center px-4 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-3/12">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={service2}
                    alt="nature image"
                  />
                </div>
                <div className="mx-auto lg:basis-2/5 w-full sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-6/12 px-4 mt-4 sm:mt-0">
                  <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                  {t("services.h5")}
                  </Typography>
                  <Typography className="mb-4 sm:mb-8 font-normal text-blue-gray-500">
                  {t("services.h6")}
                  </Typography>
                  <a href="https://forms.gle/VwZxzQ1NC1b9uNHC7">
                    <Button variant="outlined">{t("services.h4")}</Button>
                  </a>
                </div>
              </div>
              {/* Service 3 */}
              <div className="my-10 sm:mt-24 flex flex-wrap items-center">
                <div className="mx-auto mt-6 sm:mt-12 lg:mt-0 flex lg:basis-3/6 w-full justify-center px-4 sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-3/12">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={service3}
                    alt="nature image"
                  />
                </div>
                <div className="mx-auto lg:basis-2/5 w-full sm:w-5/12 md:w-5/12 lg:w-5/12 xl:w-6/12 px-4 mt-4 sm:mt-0">
                  <Typography variant="h3" className="mb-3 font-bold" color="blue-gray">
                  {t("services.h8")}
                  </Typography>
                  <Typography className="mb-4 sm:mb-8 font-normal text-blue-gray-500">
                  {t("services.h9")}
                  </Typography>
                  <a href="https://pmfby.gov.in/">
                    <Button variant="outlined">{t("services.h10")}</Button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Services;
