"use client"
import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/#contact" },
  { name: "Blog", href: "/" },
];

function MobileNav() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="lg:hidden">
      {isOpen && 
      <div>
        <nav>
          <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </nav>
      </div>
      }
      <div className="flex-row justify-items-center">
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="w-10">
            <Bars3Icon />
          </button>
        </div>
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <header className="justify-center drop-shadow-md	bg-white hidden lg:flex">
      <div className="flex max-w-6xl grow h-20 items-center px-3">
        <Link href="/" className={`font-mono text-3xl`}>
          Joel Johnston&nbsp;
            <span aria-hidden="true">&lt;</span>
            <span className="text-cyan-500">Web Dev</span>
            <span aria-hidden="true">/&gt;</span>
        </Link>
        <nav className="grow flex justify-center">
          <ul className="flex gap-8 text-2xl">
            {navItems.map(item => (
              <li key={item.name}>
                <Link href={item.href} className="text-blue-800">
                  {item.name}
                </Link>
              </li>
            ))}
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

export default function NavBar() {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}