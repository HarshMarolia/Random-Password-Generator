import { Card, CardBody, CardHeader, Avatar, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { Footer } from "@/widgets/layout";
import { UsersIcon } from "@heroicons/react/24/solid";
import service1 from '../img/image1.jpg';
import service2 from '../img/image3.jpg';
import service3 from '../img/fasal.png';
import { ImgWithRoundedCorners } from "@/widgets/layout/imgWithRoundedCorners";


export function Services() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
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
                  Services
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

              <div className="mt-10 flex flex-wrap items-center ">
                <div className="mx-auto mt-24 flex lg:basis-3/6 w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={service1}
                    alt="nature image"
                  />
                </div>
                <div className="mx-auto lg:basis-2/5 -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Pest Check List
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    Fill out the details and upload images of Pest on our Google Form or WhatsApp to get a detailed assessment on nature of pest, insect affecting your farm. Also, our report includes nature and quantity of Pesticide treatment to solve your problem.
                  </Typography>
                  <a href="https://forms.gle/VwZxzQ1NC1b9uNHC7"><Button variant="outlined">Please fill the form</Button></a>
                </div>
              </div>
              {/* Service 2 */}
              <div className="mt-24 flex flex-wrap items-center">
                <div className="mx-auto mt-24 flex lg:basis-3/6 w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={service2}
                    alt="nature image"
                  />
                </div>
                <div className="mx-auto lg:basis-2/5 -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Crop Health Check
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    With our AI/ML program and vast database of crop yield, we can do accurate assessment of the crop yield for your Crop.
                    Upload few images and share the details of the crop location, soil, etc. to get accurate estimation.
                  </Typography>
                  <a href="https://forms.gle/VwZxzQ1NC1b9uNHC7"><Button variant="outlined">Please fill the form</Button></a>
                </div>
              </div>
              {/* Service 3 */}
              <div className="mt-24 mb-10 flex flex-wrap items-center">
                <div className="mx-auto mt-24 flex lg:basis-3/6 w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <img
                    className="h-full w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                    src={service3}
                    alt="nature image"
                  />
                </div>
                <div className="mx-auto lg:basis-2/5 -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    BUY INSURANCE FOR YOUR CROP
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    Crop insurance is essential for Doubling Farmers Income. We aim to enable every farmers to purchase crop insurance.
                    <br />
                    <br />
                    Our team developing a scientific assessment for crop damage assessment. It includes handholding support to farmers in linking to crop insurance companies.
                  </Typography>
                  <a href="https://pmfby.gov.in/"><Button variant="outlined">Purchase Crop Insurance</Button></a>
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
