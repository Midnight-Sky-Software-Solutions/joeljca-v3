import Image from "next/image";

export default function TheGuide() {
  return(
    <div className="bg-[url(/experience.jpg)] bg-center md:bg-top bg-cover bg-fixed h-60 mt-10">
      <div className="full-width-container bg-black/60 h-60">
        <div className="content-width-full flex flex-col justify-center">
          <ul className="text-white text-2xl space-y-6 font-bold">
            <li className="flex items-center"><Image width={48} height={48} src="/check.png" alt="Checkmark" />React Expertise</li>
            <li className="flex items-center"><Image width={48} height={48} src="/check.png" alt="Checkmark" />7 Years of .NET Experience</li>
            <li className="flex items-center"><Image width={48} height={48} src="/check.png" alt="Checkmark" />Built scalable solutions serving 70,000+ users</li>
          </ul>
        </div>
      </div>
    </div>
  );
}