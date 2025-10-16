import Image from "next/image";

export default function TheProblem() {
  return (
    <div className="full-width-container bg-[url(/stressed_worker.jpg)] bg-bottom bg-cover bg-fixed h-60">
      <div className="bg-black/60 grow flex flex-col items-center justify-center gap-2">
        <h2 className="text-white text-center">
          Frustrated with your legacy .NET project?
        </h2>
        <p className="text-white text-2xl text-center">
          Don&apos;t let outdated software get in the way of your business goals.
        </p>
      </div>
    </div>
  );
}