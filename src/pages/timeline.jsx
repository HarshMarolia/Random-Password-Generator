import { Card, CardBody, CardHeader, Avatar, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { Footer } from "@/widgets/layout";
// import { UsersIcon } from "@heroicons/react/24/solid";
import img1 from '../img/image5.jpg';
import img2 from '../img/image6.jpg';
import { useTranslation } from "react-i18next";

export function Timeline() {
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
                                {t("timeline.h1")}
                                </Typography>
                            </div>
                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                {/* Horzontal line */}
                            </div>
                            {/* Image 1 */}

                            <img
                                className="h-90 w-90 my-10 mb-5 mx-auto rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                                src={img1}
                                alt="timeline image"
                            />

                            {/* Image 2 */}
                            <img
                                className="h-90 w-90 my-10 mx-auto rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                                src={img2}
                                alt="timeline image"
                            />

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

export default Timeline;
