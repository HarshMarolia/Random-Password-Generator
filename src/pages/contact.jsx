import { Card, CardBody, CardHeader, Avatar, Input, Textarea, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { PageTitle, Footer } from "@/widgets/layout";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

export function Contact() {
  const form = useRef();
  const [t, i18n] = useTranslation("global")
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3upuard', 'template_ef863sf', form.current, 'JlZWvS1PsWFIw_1oO')
    e.target.reset();
  };

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
                  {t("contact.h1")}
                </Typography>
              </div>
              <div className="py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="font-normal text-blue-gray-500 md:w-full">
                      {t("contact.h2")}
                    </Typography>
                  </div>
                </div>
              </div>
              {/* Todo contact us form */}
              <div className="pb-20 flex flex-wrap items-center ">
                <PageTitle heading={t("contact.h3")} >
                  {t("contact.h4")}
                </PageTitle>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="mx-auto p-4 sm:p-10 mt-12 max-w-3xl text-center rounded-lg object-center shadow-xl shadow-blue-gray-900/50"
                >
                  <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row sm:gap-8">
                    <div className="sm:w-1/2 mb-2">
                      <Input type="text" variant="standard" size="sm" name="name" label={t("contact.h5")} />
                    </div>
                    <div className="sm:w-1/2">
                      <Input type="email" variant="standard" size="sm" name="email" label={t("contact.h6")} />
                    </div>
                  </div>
                  <Textarea name="message" variant="standard" size="lg" label={t("contact.h7")} rows={6} />
                  <Button type="submit" variant="gradient" size="lg" className="mt-4 sm:mt-8">
                    {t("contact.h8")}
                  </Button>
                </form>
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

export default Contact;
