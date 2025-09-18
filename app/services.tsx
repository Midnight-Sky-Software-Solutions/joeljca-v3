import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <div className="full-width-container" id="services">
      <div className="content-width-full pt-14">
        <h2 className="pb-8 text-4xl font-serif">
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
            className="grow text-xl space-y-3"
          >
            <p>
              Struggling to grow your small association, club or subscription service?
              I can help you <strong>convert your website visitors into members</strong> by fixing the friction points that cause drop-offs — from clunky sign-ups to outdated renewals.
            </p>
            <h3 className="font-serif">What I Offer:</h3>
            <ul className="list-disc list-inside">
              <li>Custom website design that engages visitors</li>
              <li>Lightning-fast performance using Next.js</li>
              <li>Seamless integration with Content Management Systems, Payment Gateways, Database Management Systems, and Third-party services (as needed)</li>
            </ul>
            <h3 className="font-serif">Why Choose Me?</h3>
            <p>
              I understand the unique needs of membership-based businesses and provide scalable, easy-to-manage solutions that support both public-facing content and member-only areas.
            </p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-cyan-600 font-bold py-3 text-3xl">
                <Link href="/contact">👉 Lets build a website that grows your membership and drives engagement!</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}