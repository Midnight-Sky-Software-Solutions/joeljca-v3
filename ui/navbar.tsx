import Image from "next/image";

export default function NavBar() {
  return (
    <header className="flex justify-center drop-shadow-md	bg-white">
      <div className="flex max-w-6xl grow h-20 items-center px-3">
        <div className={`font-mono text-3xl`}>
          Joel Johnston&nbsp;
            <span aria-hidden="true">[</span>
            Web Dev
            <span aria-hidden="true">]</span>
        </div>
        <nav className="grow flex justify-center">
          <ul className="flex gap-8 text-2xl">
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div>
          <ul className="flex gap-3">
            <li>
              <Image
                src="/Upwork.svg"
                width={45}
                height={45}
                alt="Upwork"
              />
            </li>
            <li>
              <Image
                src="/LinkedIn.svg"
                width={45}
                height={45}
                alt="Upwork"
              />
            </li>
            <li>
              <Image
                src="/eMail.svg"
                width={45}
                height={45}
                alt="Upwork"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}