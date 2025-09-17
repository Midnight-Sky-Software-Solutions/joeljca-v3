import Image from "next/image"
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="full-width-container" id="portfolio">
      <div className="content-width-full pt-12">
        <h2 className="pb-8 text-4xl font-serif">
          Portfolio
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5">
          <div className="grow ">
            <h3 className="text-3xl pb-8 font-serif">The Association of Home Pizza Cooks</h3>
            <p className="text-xl pb-8">
              This proof of concept showcases an association website built with React and Wild Apricot. It demonstrates how a Next.js application can integrate with both WildApricot and WordPress to enable
              snappy load speed and intuitive UI/UX. The outcome is more signups, better engagement, and improved retention.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://demo.joelj.ca"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-xl px-3 py-2 rounded-lg"
              >
                Visit
              </Link>
              <Link
                href="/blog/building-a-modern-association-membership-portal-login-renewals-and-events"
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-xl px-3 py-2 rounded-lg"
              >
                Case Study
              </Link>
            </div>
          </div>
          <div className="lg:w-128 flex-none">
            <Image
              src="/mockuuups-macbook-pro-mockup.jpg"
              alt="A computer and a headset"
              width={8256}
              height={6192}
              className="lg:float-right rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 mt-12">
          <div className="lg:w-128 flex-none">
            <Image
              src="/mockuuups-satp.jpg"
              alt="A computer and a headset"
              width={1500}
              height={2000}
              className="lg:float-right rounded-lg"
            />
          </div>
          <div className="grow ">
            <h3 className="text-3xl pb-8 font-serif">The Society of Association Technology Professionals</h3>
            <p className="text-xl pb-8">
              This demo project demonstrates how a powerful association website can be built without an AMS. In this proof of concept, I integrate Auth0, HubSpot, Contentful and Stripe to build an engaging web experience 
              that serves both members and the public. It demonstrates how an intuitive checkout process helps turn prospects into members.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://demo2.joelj.ca"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-400 text-white text-xl px-3 py-2 rounded-lg"
              >
                Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}