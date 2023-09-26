import { Card, CardBody, CardHeader, Avatar, Input, Textarea, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { PageTitle, Footer } from "@/widgets/layout";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
  const form = useRef();
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
                  Contact Us
                </Typography>
              </div>
              <div className="border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="font-normal text-blue-gray-500 md:w-full">
                      Let’s talk 👋 Don’t hesitate to reach out with the contact information below, or send a message using the form.
                    </Typography>
                  </div>
                </div>
              </div>
              {/* Todo contact us form */}
              <div className="pb-20 flex flex-wrap items-center ">
                <PageTitle heading="Want to work with us?">
                  Complete this form and we will get back to you in 24 hours.
                </PageTitle>
                {/* <form ref={form} onSubmit={sendEmail} className="mx-auto p-10 mt-12 max-w-3xl text-center rounded-lg object-center shadow-xl shadow-blue-gray-900/50">
                  <div className="mb-8 flex gap-8 sm:flex-col">
                    <Input type="text" variant="standard" size="lg" name='name' label="Full Name" />
                    <Input type="email" variant="standard" size="lg" name="email" label="Email Address" />
                  </div>
                  <Textarea name="message" variant="standard" size="lg" label="Message" rows={6} />
                  <Button type='submit' variant="gradient" size="lg" className="mt-8">
                    Send Message
                  </Button>
                </form> */}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="mx-auto p-5 sm:p-10 mt-12 max-w-3xl text-center rounded-lg object-center shadow-xl shadow-blue-gray-900/50"
                >
                  <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row sm:gap-8">
                    <div className="sm:w-1/2">
                      <Input type="text" variant="standard" size="lg" name="name" label="Full Name" />
                    </div>
                    <div className="sm:w-1/2">
                      <Input type="email" variant="standard" size="lg" name="email" label="Email Address" />
                    </div>
                  </div>
                  <Textarea name="message" variant="standard" size="lg" label="Message" rows={6} />
                  <Button type="submit" variant="gradient" size="lg" className="mt-4 sm:mt-8">
                    Send Message
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
