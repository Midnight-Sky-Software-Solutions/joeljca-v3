import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex-row align-center justify-items-center py-16" id="contact">
      <h2 className="text-4xl font-serif pb-4">Ready to get started?</h2>
      <div>
        <Link href="mailto:me@joelj.ca" className="text-cyan-500 text-4xl">Let's talk!</Link>
      </div>
    </div>
  );
}