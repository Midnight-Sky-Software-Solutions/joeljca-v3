import Link from "next/link";
import Image from "next/image";

const socialMediaItems = [
  // { name: "Upwork", image: "pi-check", "href": "https://www.upwork.com/freelancers/~011f757c30fa5d1800" },
  { name: "LinkedIn", image: "pi-linkedin", "href": "https://www.linkedin.com/in/joel-alexander-johnston/" },
  { name: "Email", image: "pi-envelope", "href": "mailto:me@joelj.ca" },
]

export default function Footer() {
  return (
    <footer className="flex justify-center drop-shadow-md	bg-aqua-glow-700">
      <div className="max-w-6xl grow my-8 items-start px-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-white">
        <div>
          <p>&copy; Midnight Sky Software Solutions Ltd.</p>
          <p>I was born to run~</p>
        </div>
        <div>
          <Link className="underline font-serif text-sm" href="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <h2 className="font-bold pb-2 text-sm">Socials</h2>
          <ul className="flex gap-3">
            {socialMediaItems.map(item => (
              <li key={item.name} className="text-white">
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