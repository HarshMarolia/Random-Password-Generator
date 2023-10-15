import { Card, CardBody, CardHeader, Avatar,IconButton, Typography, Button } from "@material-tailwind/react";
import React from "react";

// import { UsersIcon } from "@heroicons/react/24/solid";
import { featuresData, teamData, contactData } from "@/data";
import img1 from '../img/image5.jpg';
import img2 from '../img/image6.jpg';
import { useTranslation } from "react-i18next";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";


export function Library() {
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
                                    {t("library.h1")}
                                </Typography>
                            </div>
                            <section className="px-4 pt-20 pb-48">
                                <div className="container mx-auto">
                                    <PageTitle heading="Our Supporters">
                                    </PageTitle>
                                    <div className="mt-24 grid grid-cols gap-10 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
                                        {teamData.map(({ img, name, socials }) => (
                                            <TeamCard
                                                key={name}
                                                img={img}
                                                name={name}
                                                //position={position}
                                                socials={
                                                    <div className="flex items-center gap-2">
                                                        {socials.map(({ color, name }) => (
                                                            <IconButton key={name} color={color} variant="text">
                                                                <i className={`fa-brands text-lg fa-${name}`} />
                                                            </IconButton>
                                                        ))}
                                                    </div>
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>


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

export default Library;
