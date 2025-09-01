import Image from "next/image"
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="full-width-container" id="portfolio">
      <div className="content-width-full pt-12">
        <h2 className="pb-8">
          Portfolio
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="grow ">
            <h3 className="text-3xl pb-8">The Association of Home Pizza Cooks</h3>
            <p className="text-2xl pb-8">
              This proof of concept showcases an association website built with React and Wild Apricot. It demonstrates how a Next.js application can integrate with both WildApricot and WordPress through their respective web APIs. The primary technical challenge addressed was implementing single sign-on (SSO) with WildApricot.
            </p>
            <Link
              href="https://demo.joelj.ca"
              target="_blank"
              className="bg-cyan-500 text-white text-2xl px-3 py-2 rounded-lg"
            >
              Visit
            </Link>
          </div>
          <div className="lg:w-128 flex-none">
            <Image
              src="/ahpc.png"
              alt="A computer and a headset"
              width={466}
              height={349}
              className="lg:float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}