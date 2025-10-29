import MailingListSignup from "./mailing-list-signup";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center drop-shadow-md	bg-aqua-glow-700">
      <div className="flex max-w-6xl grow my-8 items-center px-3 grid sm:grid-cols-2 lg:grid-cols-4 text-white">
        <div>
          <p>&copy; Midnight Sky Software Solutions Ltd.</p>
          <p>I was born to run~</p>
        </div>
        <div></div>
        <div></div>
        <div>
          <Image
            src="/logo_white.svg"
            alt="Joel Johnston"
            width={207}
            height={58.65}
          />
        </div>
      </div>
    </footer>
  )
}