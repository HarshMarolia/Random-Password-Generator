import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import image4 from '../img/image4.jpg';
import fasal from '../img/fasal.png';
import { ImgWithRoundedCorners } from "@/widgets/layout/imgWithRoundedCorners";
import { useTranslation } from "react-i18next";


export function Home() {
  const [t, i18n] = useTranslation("global")
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/homepage.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                {t("home.h1")}
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              {t("home.h2")}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              // <FeatureCard
              //   key={title}
              //   color={color}
              //   title={title}
              //   icon={React.createElement("img", {
              //     className: "",
              //   })}
              //   description={description}
              // />
              <Card key={title} className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src={icon}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    {title}
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    {description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Solutions for the Farming Community
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facilis deleniti temporibus harum mollitia
                incidunt beatae dolores ducimus. Alias eos excepturi quas maiores expedita quod dolor aliquid adipisci odit
                asperiores possimus laudantium beatae, tenetur at, vitae voluptate incidunt dolore voluptas optio quam quibusdam
                nobis autem! Earum illum odit voluptate tempore.
              </Typography>
              {/* <Button variant="outlined">read more</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src={image4}
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Soil Health
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Soil nutrient, its features and suitable crop suggestion based on few images of your Crop.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
          {/* Second */}
          {/* <section className="relative  py-24 px-4"></section> */}
          <div className="mt-32 flex flex-wrap items-center bg-blue-gray-50/50">
            <div className="mx-auto mt-24 flex lg:basis-3/6 w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <ImgWithRoundedCorners source={fasal} />
            </div>
            <div className="mx-auto pb-20 lg:basis-2/5 -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                INSURANCE IS KEY TO FINANCIAL INDEPENDENCE OF FARMERS
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                We provide an independent assessment of the crop damage due to natural calamities as well as pest attack. Send us your images at different stages to make estimation of the crop loss.
              </Typography>
              {/* <Button variant="outlined">read more</Button> */}
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

export default Home;
