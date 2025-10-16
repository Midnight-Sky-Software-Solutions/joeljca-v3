import Image from "next/image";

export default function TheGuide() {
  return(
    <div className="full-width-container bg-[url(/experience.jpg)] bg-center md:bg-top bg-cover bg-fixed h-60 mt-10">
      <div className="bg-black/60 grow flex flex-col items-center justify-center gap-2">
        <ul className="text-white text-2xl space-y-6 font-bold">
          <li className="flex items-center"><Image width={48} height={48} src="/check.png" alt="Checkmark" />React Expertise</li>
          <li className="flex items-center"><Image width={48} height={48} src="/check.png" alt="Checkmark" />7 Years of .NET Experience</li>
          <li className="flex items-center"><Image width={48} height={48} src="/check.png" alt="Checkmark" />Built scalable solutions serving 70,000+ users</li>
        </ul>
      </div>
    </div>
  );
}