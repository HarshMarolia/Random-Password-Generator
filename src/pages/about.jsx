// About Us
import { Card, CardBody, CardHeader, Avatar, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { Footer } from "@/widgets/layout";
import img1 from '../img/team/m1.jpg'
import img2 from '../img/team/m2.jpg'
import img3 from '../img/team/m3.jpg'
import img4 from '../img/team/m4.jpg'
import img5 from '../img/team/m5.jpg'
import { useTranslation } from "react-i18next";

export function About() {
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
                  {t("about.h1")}
                </Typography>
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    {t("about.h2")}
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    {t("about.h3")}
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  {t("about.h4")}
                  </Typography>
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <Card className="shadow-lg shadow-gray-500/10">
                    <CardHeader className="relative h-56">
                      <img
                        alt="Card Image"
                        src={img1}
                        className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 font-bold"
                      >
                       {t("about.h5")}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-24 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                     {t("about.h6")}
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  {t("about.h7")}
                  </Typography>
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <Card className="shadow-lg shadow-gray-500/10">
                    <CardHeader className="relative h-56">
                      <img
                        alt="Card Image"
                        src={img2}
                        className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 font-bold"
                      >
                        {t("about.h8")}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-24 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    {t("about.h9")}
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  {t("about.h10")}
                  </Typography>
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <Card className="shadow-lg shadow-gray-500/10">
                    <CardHeader className="relative h-56">
                      <img
                        alt="Card Image"
                        src={img5}
                        className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 font-bold"
                      >
                      {t("about.h11")}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-24 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    {t("about.h12")}
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  {t("about.h13")}
                  </Typography>
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <Card className="shadow-lg shadow-gray-500/10">
                    <CardHeader className="relative h-56">
                      <img
                        alt="Card Image"
                        src={img4}
                        className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 font-bold"
                      >
                       {t("about.h14")}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-24 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                  {t("about.h15")}
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  {t("about.h16")}
                  </Typography>
                </div>
                <div className="mx-auto my-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <Card className="shadow-lg shadow-gray-500/10">
                    <CardHeader className="relative h-56">
                      <img
                        alt="Card Image"
                        src={img3}
                        className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 font-bold"
                      >
                      {t("about.h17")}
                      </Typography>
                    </CardBody>
                  </Card>
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

export default About;
