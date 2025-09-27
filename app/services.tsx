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
              Your team relies on <strong>SQL Server and ASP.NET</strong> for reliable backends, but your frontend lags behind in usability, performance and modern standards. That&apos;s where I come. I can help you:
            </p>
            <ul className="list-disc list-inside">
              <li>Deliver responsive, accessible, and intuitive interfaces that today&apos;s users expect.</li>
              <li>Leverage SSR and SSG for blazing-fast application performance.</li>
              <li>Adopt best practices for version control, build, and deployment.</li>
              <li>Integrate with Identity Providers for a seamless login and registration experience.</li>
              <li>Leverage code generation to keep your frontend in sync with your backend.</li>
              <li>Secure your application with ironclad authentication and authorization.</li>
            </ul>
            <p>I partner with <strong>.NET shops and enterprise IT leaders</strong> who want the best of both worlds: the stability of ASP.NET with the flexibility and speed of Next.js.</p>
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