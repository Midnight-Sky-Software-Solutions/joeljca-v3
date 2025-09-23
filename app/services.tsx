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
              With nearly a decade of professional development experience, I specialize in creating software that balances <strong>performance, maintainability, and user experience</strong>. Whether you&apos;re building a new product from scratch or scaling an existing platform, I bring expertise in:
            </p>
            <ul className="list-disc list-inside">
              <li><strong>Frontend development with React</strong> → building modern, responsive, and intuitive UIs that delight users.</li>
              <li><strong>Backend development with ASP.NET</strong> → designing secure, scalable APIs and business logic that grow with your product.</li>
              <li><strong>Database design with SQL Server</strong> → ensuring reliable data storage, reporting, and high-performance queries.</li>
            </ul>
            <p>I partner with SaaS founders and product teams who need a developer that not only writes clean code, but also <strong>understands product goals, user needs, and business impact.</strong></p>
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