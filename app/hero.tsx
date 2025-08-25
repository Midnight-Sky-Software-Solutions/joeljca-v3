import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="bg-linear-to-b from-cyan-800 to-cyan-shade flex justify-center"
    >
      <div className="flex max-w-6xl grow items-center px-32">
        <div className="grow">
          <h2 className="text-white text-3xl font-serif">Hi, I`m Joel 👋</h2>
          <p className="text-white text-2xl mt-10">
            I build websites for small associations and other membership organizations.
          </p>
        </div>
        <div>
          <Image
            src="/moi.jpg"
            alt="A picture of me (Joel)"
            width={327}
            height={327}
            className="translate-y-1/4 rounded-full border-5 border-teal-700"
          />
        </div>
      </div>
    </div>
  );
}