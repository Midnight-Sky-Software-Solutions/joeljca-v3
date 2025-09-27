import * as motion from "motion/react-client";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="bg-linear-to-b from-cyan-800 to-cyan-shade flex justify-center"
    >
      <div className="flex flex-col max-w-6xl grow items-center px-8 sm:px-16 lg:px-32 lg:flex-row pt-12 lg:pt-0">
        <motion.div 
          className="grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-white text-3xl font-serif text-center">Hi, I&apos;m Joel 👋</h2>
          <p className="text-white text-2xl mt-10">
            I help .NET shops build modern frontends in Next.js.
          </p>
        </motion.div>
        <div>
          <Image
            src="/moi.jpg"
            alt="A picture of me (Joel)"
            width={327}
            height={327}
            className="translate-y-1/8 sm:translate-y-1/4 rounded-full border-5 border-teal-700 mx-3"
          />
        </div>
      </div>
    </div>
  );
}