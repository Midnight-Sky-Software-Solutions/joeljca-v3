import MailingListSignup from "./mailing-list-signup";

export default function Footer() {
  return (
    <footer className="flex justify-center drop-shadow-md	bg-cyan-700">
      <div className="flex max-w-6xl grow my-8 items-center px-3 grid sm:grid-cols-2 lg:grid-cols-4 text-white">
        <div>
          <p>&copy; Midnight Sky Software Solutions Ltd.</p>
          <p>I was born to run~</p>
        </div>
        <div></div>
        <div></div>
        <div>
          <p className="text-2xl font-bold">✉️ Subscribe to my mailing list</p>
          <MailingListSignup />
        </div>
      </div>
    </footer>
  )
}