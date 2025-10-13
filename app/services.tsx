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
              These days, your ASP.NET Web Forms application seems to be causing more problems than it solves. End users complain endlessly about the poor experience and outdated design. Your team is drowning in a sea of feature requests and defects, but each change feels like a game of Jenga. I know this pain because I&apos;ve worked hands-on with Web Forms for over six years.
            </p>
            <p>
              As an IT leader, you want to do better but a migration has its own challenges. Difficult technical decisions, resource constraints, and project risks all block the path to a better solution.
            </p>
            <p>
              I&apos;m here to show that a migration might not be as scary as you think. Leveraging my eight years of industry experience, I will help you assess your readiness, select a new stack, and work alongside your team to execute a seamless migration.
            </p>
            <p>
              I invite you to book a call with me so that I can better understand your needs. I will gladly perform a free code review of your existing application and create a report with key recommendations. After reviewing my report, if you would like to move forward with my services, you can hire me for my contract rate of US$65 / hour.
            </p>
            <p>
              Taking the first step may seem daunting, but staying on your current path is risky. Without modernizing your stack, the backlog continues to grow and dissatisfaction mounts. Let me help you build a new solution that delights your end users and keeps up with business demands.
            </p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-center text-cyan-600 font-bold py-3 text-3xl">
                <Link href="/contact">👉 Book a call with me today!</Link>
              </p>
            </motion.div>
          </div>
        </div> 
      </div>
    </div>
  );
}