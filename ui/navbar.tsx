import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex justify-center drop-shadow-md	bg-white">
      <div className="flex max-w-6xl grow h-20 items-center px-3">
        <Link href="/" className={`font-mono text-3xl`}>
          Joel Johnston&nbsp;
            <span aria-hidden="true">[</span>
            <span className="text-cyan-500">Web Dev</span>
            <span aria-hidden="true">]</span>
        </Link>
        <nav className="grow flex justify-center">
          <ul className="flex gap-8 text-2xl">
            <li>
              <Link href="/" className="text-blue-800">
                Services
              </Link>
            </li>
            <li>
              <Link href="/" className="text-blue-800">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/" className="text-blue-800">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="text-blue-800">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex gap-3">
            <li>
              <Link 
                href="https://www.upwork.com/freelancers/~011f757c30fa5d1800"
                target="_blank"
              >
                <Image
                  src="/Upwork.svg"
                  width={45}
                  height={45}
                  alt="Upwork"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/joel-alexander-johnston/"
                target="_blank"
              >
                <Image
                  src="/LinkedIn.svg"
                  width={45}
                  height={45}
                  alt="Upwork"
                />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:me@joelj.ca"
              >
                <Image
                  src="/eMail.svg"
                  width={45}
                  height={45}
                  alt="Upwork"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}