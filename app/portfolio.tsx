import Image from "next/image"
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="flex justify-center" id="portfolio">
      <div className="max-w-6xl grow items-center px-3 pt-12">
        <h2 className="text-4xl font-serif pb-8">
          Portfolio
        </h2>
        <div className="flex">
          <div className="grow ">
            <h3 className="text-3xl pb-8">The Association of Home Pizza Cooks</h3>
            <p className="text-2xl pb-8">
              An association website built with React and Wild Apricot. This Proof of Concept demonstrate a Next.js application integrating with WildApricot and WordPress by consuming their respective Web APIs. The major technical challenge was implementing Single Sign On with WildApricot.
            </p>
            <Link
              href=""
              className="bg-cyan-500 text-white text-2xl px-3 py-2 rounded-lg"
            >
              Visit
            </Link>
          </div>
          <div className="w-128 flex-none">
            <Image
              src="/ahpc.png"
              alt="A computer and a headset"
              width={466}
              height={349}
              className="float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}