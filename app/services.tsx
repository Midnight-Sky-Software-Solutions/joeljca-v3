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
              If you want to ditch ASP.NET Web Forms and migrate to a modern web stack, I&apos;m the guy to get you there.
            </p>
            <p>
              Is your organization struggling with a clunky user experience and slow development cycles? I&apos;ve worked with Web Forms for over six years, so I know the pain first hand. Simple changes take ages and the user experience does not live up to today&apos;s standards.
            </p>
            <p>
              <b>Don&apos;t let outdated technology hold back your business goals.</b> With my help, you can future-proof your .NET investments with a modern stack that offers faster development cycles and sleek user interfaces.
            </p>
            <p>
              I&apos;ve built .NET solutions that serve 70,000+ end users using modern front end frameworks like <b>React</b> and <b>Angular</b>. Book a free consultation with me so that we can find out if my services are right for you.
            </p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-cyan-600 font-bold py-3 text-3xl">
                <Link href="/contact">👉 Let me take the confusion out of modern web frameworks!</Link>
              </p>
            </motion.div>
          </div>
        </div> 
      </div>
    </div>
  );
}