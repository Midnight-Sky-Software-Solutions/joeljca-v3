import Link from "next/link";

export default function Offer() {
  return (
    <div className="full-width-container bg-linear-to-t from-blue-100/30 to-white">
      <div className="content-width-full pt-14 text-center">
        <h3 className="pb-8 text-4xl font-serif">Free Migration Readiness Assessment</h3>
        <div className="lg:grid grid-cols-12">
          <div className="col-start-3 col-end-11 text-xl space-y-6 pb-12">
            <p>
              Do you have have a legacy project built in ASP.NET Web Forms or ASP.NET MVC?
              Are you considering migrating to React, but want to know the risks and required effort first?
              I will conduct a <strong>free</strong> 1 hour code review of your project to assess your readiness.
            </p>
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-white text-xl px-3 py-2 rounded-lg"
            >
              Next Steps
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}