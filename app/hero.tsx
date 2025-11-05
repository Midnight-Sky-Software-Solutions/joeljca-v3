import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="bg-[url('/abstract2m.jpg')] md:bg-[url('/abstract2.webp')] from-cyan-800 to-cyan-shade flex h-[100vh] min-h-140 bg-cover"
    >
      <div className="flex grow justify-center bg-black/50">
        <div className="flex flex-col max-w-6xl grow items-center px-8 sm:px-16 lg:px-32 sm:flex-row pt-12 lg:pt-0 text-center lg:text-right gap-10">
          <div>
            <h2 className="text-white text-3xl lg:text-5xl font-serif">Hi, I&apos;m Joel 👋</h2>
            <p className="text-white text-2xl lg:text-3xl mt-10">
              I help .NET shops modernize their stack.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="bg-fresh-lime-500 hover:bg-aqua-glow-400 text-white text-2xl px-4 py-3 rounded-lg"
              >
                📲 Contact Me
              </Link>
            </div>
          </div>
          <div className="grow flex flex-col justify-center">
            <Image
              // priority
              fetchPriority="high"
              src="/moi.jpg"
              alt="A picture of me (Joel)"
              width={327}
              height={327}
              className="rounded-full border-5 border-teal-700 mx-3 shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}