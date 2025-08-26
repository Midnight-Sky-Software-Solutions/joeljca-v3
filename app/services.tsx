import Image from "next/image";

export default function Services() {
  return (
    <div className="full-width-container" id="services">
      <div className="content-width-full pt-14">
        <h2 className="pb-8">
          My Services
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="lg:w-128 flex-none">
            <Image
              src="/services.png"
              alt="A computer and a headset"
              width={456}
              height={304}
            />
          </div>
          
          <p
            className="grow text-2xl"
          >
            With expertise in Wild Apricot, I help small membership organizations build engaging websites for their members and the public. I leverage the modern web framework Next.js to ensure fast load times and excellent overall user experience. I can seamlessly integrate with Content Management Systems, Payment Gateways, Database Management Systems, and other software services as needed by the project.
          </p>
        </div>
      </div>
    </div>
  );
}