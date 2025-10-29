import Image from "next/image";

export default function Ebook() {
  return (
    <div className="full-width-container pt-14">
      <div className="content-width-full lg:grid grid-cols-2">
        <div>
          <Image
            src="/ebook.png"
            alt="eBook cover"
            width={1080}
            height={1080}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="pb-8 text-4xl font-serif">
            Download the Ultimate .NET and React Integration Guide
          </h2>
          <p className="text-xl">Skip months of trial and error. Get the complete React + .NET architecture guide and modernize your frontend with clarity.</p>
          <div className="mt-8">
            <a
              href="https://guide.joelj.ca/react-dotnet-integration-guide-download"
              className="bg-fresh-lime-500 hover:bg-aqua-glow-400 text-white text-xl px-3 py-2 rounded-lg"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}