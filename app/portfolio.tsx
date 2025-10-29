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
            <h3 className="text-3xl pb-8 font-serif">MemberPlus</h3>
            <p className="text-xl pb-8">
              A multi-tenant membership management platform developed using ASP.NET Web API and React Router. The system supports organization-level data segregation, user authentication, subscription renewals, and RESTful API integration for external services.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/Midnight-Sky-Software-Solutions/memberplus"
                target="_blank"
                className="bg-fresh-lime-500 hover:bg-aqua-glow-400 text-white text-xl px-3 py-2 rounded-lg"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="lg:w-128 flex-none">
            <Image
              src="/memberplus_mockup.jpeg"
              alt="Mockup of the MemberPlus application"
              width={3700}
              height={2160}
              className="lg:float-right rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}