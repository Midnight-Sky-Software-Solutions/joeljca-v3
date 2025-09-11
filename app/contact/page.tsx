import { CalendarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Joel Johnston",
};

export default function Contact() {
  return (
    <>
      <div className="full-width-container">
        <div className="content-width-full py-12 text-center flex flex-col gap-5">
          <h2 className="text-4xl font-serif">
            Contact Me
          </h2>
          <div className="text-xl">
            <p>
              Think I can help with your next project? Want to know more? Just want to call and chat?
            </p>
            <p>
              Don&apos;t hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
      <div className="full-width-container pb-12">
        <div className="content-width-full flex flex-col sm:flex-row gap-8 justify-center items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 text-cyan-500">
              <PhoneIcon />
            </div>
            <a href="tel:+15875682461" className="text-xl font-bold">1.587.568.2461</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 text-cyan-500">
              <EnvelopeIcon />
            </div>
            <a href="mailto:me@joelj.ca" className="text-xl font-bold">me@joelj.ca</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 text-cyan-500">
              <CalendarIcon />
            </div>
            <a href="https://cal.com/joel-johnston-2gsntj" target="_blank" className="text-xl font-bold">Book a free call</a>
          </div>
        </div>
      </div>
    </>
  );
}