"use client"
import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const socialMediaItems = [
  { name: "Upwork", image: "/Upwork.svg", "href": "https://www.upwork.com/freelancers/~011f757c30fa5d1800" },
  { name: "LinkedIn", image: "/LinkedIn.svg", "href": "https://www.linkedin.com/in/joel-alexander-johnston/" },
  { name: "Email", image: "/eMail.svg", "href": "mailto:me@joelj.ca" },
]

function MobileNav() {
  
  const [isOpen, setIsOpen] = useState(false);
  const navItemsWithHome = [
    { name: "Home", href: "/" }
  ].concat(navItems);

  const pathname = usePathname();
  const searchParams = useSearchParams()
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <header className="lg:hidden sticky top-0 z-10 bg-white border-1 border-warm-grey-700">
      {isOpen && 
      <div>
        <nav>
          <ul className="text-3xl">
            {navItemsWithHome.map(item => (
              <li key={item.name} className="text-center py-3">
                <Link href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center my-6">
          <ul className="flex gap-12 display-block">
            {socialMediaItems.map(item => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  target={item.href.startsWith("mailto") ? "" : "_blank"}
                >
                  <Image
                    src={item.image}
                    width={45}
                    height={45}
                    alt={item.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
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

function StubMobileNav() {
  return (
    <header className="lg:hidden sticky top-0 z-10 bg-white border-1 border-warm-grey-700">
      <div className="flex-row justify-items-center">
        <div className="flex items-center">
          <Bars3Icon />
        </div>
      </div>
    </header>
  )
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
            {socialMediaItems.map(item => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  target={item.href.startsWith("mailto") ? "" : "_blank"}
                >
                  <Image
                    src={item.image}
                    width={45}
                    height={45}
                    alt={item.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default function NavBar() {
  return (
    <>
      <Suspense fallback={<StubMobileNav />}>
        <MobileNav />
      </Suspense>
      <DesktopNav />
    </>
  );
}