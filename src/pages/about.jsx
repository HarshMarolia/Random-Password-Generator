// About Us

import { Card, CardBody, CardHeader,Avatar, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { Footer } from "@/widgets/layout";
import img1 from '../img/team/m1.jpg'
import img2 from '../img/team/m2.jpg'
import img3 from '../img/team/m3.jpg'
import img4 from '../img/team/m4.jpg'
import img5 from '../img/team/m5.jpg'

export function About() {
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
                        src="/img/favicon.png"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400">Conntect</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Photos
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        89
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  About Us
                </Typography>
                {/* <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Los Angeles, California
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Solution Manager - Creative Tim Officer
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div> */}
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                    Bhoomi AI Solutions is a tech startup with its root in rural India. Our team members have 10 years of work experience in Web 3.0, Blockchain, and large-scale AI model deployment.
                    </Typography>
                    {/* <Button variant="text">Show more</Button> */}
                  </div>
                </div>
              </div>

              <div className="mt-32 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Anant Kumar
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  Anant Kumar has MSc in Sustainable Energy and Crops from UCD Dublin. He has worked in National Chemical Laboratory, Pune (India). He worked as a project consultant for Ivory research (United Kingdom). He has done internship in Taiwan, France. He has extensive research work experience and research paper in Nature. He is currently working as a data scientist.
                  </Typography>
                  {/* <Button variant="outlined">read more</Button> */}
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
                        Anant Kumar, Founder
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-32 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Anupam Kumar
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  Anupam Kumar has over 5 years of experience as process engineer in applying machine learning for process optimization and pipelines transport. He has MSc in chemical engineering from the University of Alberta. He founded startup company Greyjay energy on energy efficiency in Edmonton AB and raised over 1 Cr in funding from investors.
                  </Typography>
                  {/* <Button variant="outlined">read more</Button> */}
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
                        Anupam Kumar, Founder
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-32 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Amit Kumar Singh
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  Amit Kumar Singh is the owner of multiple fuel retail services across Bihar. Also, he works as a project consultant on multiple projects.
                  </Typography>
                  {/* <Button variant="outlined">read more</Button> */}
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
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
                        Amit Kumar Singh, Mentor
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-32 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Amit Kumar
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  Amit Kumar is a postdoctoral researcher at the University of New Hampshire and a former Senior Project Engineer at the Indian Institute of Technology (IIT), Guwahati. Amit holds expertise in the field of Molecular Dynamics Simulations of Protein-RNA Complexes and potent to work in all sub-disciplines of Computational Biology & Chemistry.
                  </Typography>
                  {/* <Button variant="outlined">read more</Button> */}
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
                        Amit Kumar, Researcher
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div className="mt-32 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    Janit Anjaria
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                  Janit Anjaria is a Senior Software Engineer at Aurora Innovation Inc., where he currently works on building high-definition 3-D maps for self-driving vehicles. Before joining Aurora, he worked on the Autonomous Vehicle Maps team at Uber Advanced Technology Group.
                  </Typography>
                  {/* <Button variant="outlined">read more</Button> */}
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
                        Janit Anjaria, Data Scientist
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
