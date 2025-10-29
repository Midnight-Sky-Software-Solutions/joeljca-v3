"use client"
import * as motion from "motion/react-client";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const socialMediaItems = [
  // { name: "Upwork", image: "pi-check", "href": "https://www.upwork.com/freelancers/~011f757c30fa5d1800" },
  { name: "LinkedIn", image: "pi-linkedin", "href": "https://www.linkedin.com/in/joel-alexander-johnston/" },
  { name: "Email", image: "pi-envelope", "href": "mailto:me@joelj.ca" },
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
    <header className="bg-white lg:hidden sticky top-0 z-10 border-1 border-warm-grey-700">
      {isOpen &&
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
      >
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
      </motion.div>
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
    <header className="justify-center fixed top-0 drop-shadow-md	bg-black/50 hidden lg:flex w-full z-20 backdrop-blur-sm text-white">
      <div className="flex max-w-6xl grow h-20 items-center px-3">
        <Link href="/" className={`font-mono text-3xl`}>
          <Image
            src="/logo.svg"
            alt="Joel Johnston"
            width={207}
            height={58.65}
          />
        </Link>
        <nav className="grow flex justify-center">
          <ul className="flex gap-8 text-2xl">
            {navItems.map(item => (
              <li key={item.name}>
                <Link href={item.href} className="text-aqua-glow-100">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <ul className="flex gap-3">
            {socialMediaItems.map(item => (
              <li key={item.name} className="text-fresh-lime-300">
                <Link 
                  href={item.href}
                  target={item.href.startsWith("mailto") ? "" : "_blank"}
                >
                  <span className={`pi ${item.image}`} style={{ fontSize: '2rem' }}></span>
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