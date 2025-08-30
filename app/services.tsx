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
          
          <div
            className="grow text-2xl space-y-3"
          >
            <p>Are you a small association, club, chamber, or chapter looking to build a professional and engaging website for your members and the public?</p>
            <p>With expertise in <b>Wild Apricot</b> and modern web technologies like <b>Next.js</b>, I specialize in creating fast, user-friendly, and highly functional websites tailored specifically for membership-based organizations.</p>
            <p>I can help you deliver a seamless digital experience that keeps your members engaged and your operations running smoothly.</p>
            <h3><b>What I Offer:</b></h3>
            <ul className="list-disc list-inside">
              <li>Custom website design tailored for associations and clubs</li>
              <li>Wild Apricot (or other AMS) integration and configuration</li>
              <li>Lightning-fast performance using Next.js</li>
              <li>Seamless integration with Content Management Systems, Payment Gateways, Database Management Systems, and Third-party services (as needed)</li>
            </ul>
            <h3><b>Why Choose Me?</b></h3>
            <p>I understand the unique needs of membership-based organizations and provide scalable, easy-to-manage solutions that support both public-facing content and member-only areas.</p>
            <p>Lets build a website that reflects your mission, engages your members, and simplifies your operations!</p>
          </div>
        </div>
      </div>
    </div>
  );
}