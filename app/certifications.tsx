export default function Certifications() {
  return (
    <div className="flex-row align-center justify-items-center px-3" id="contact">
      <div className="content-width-full pt-14">
        <h2 className="pb-8 text-4xl font-serif">
          Certifications
        </h2>
        <div className="grid grid-cols-3">
          <div className="col-span-3 lg:col-span-2 text-xl space-y-3">
            <p>
              As a <a className="text-blue-500" href="https://learn.microsoft.com/en-us/users/joeljohnston-3908/credentials/6692d4c3c956232b" target="_blank">Microsoft Certified: Azure Database Administrator Associate</a>, I bring
              expert knowledge of database performance. I am skilled with query tuning, indexing and architecture decisions that scale for enterprise workloads.
            </p>
            <p>
              Most full-stack .NET developers will default to Entity Framework for data access, even when it creates an unnecessary performance overhead. With my deep SQL Server knowledge, I can help guide towards
              a micro-ORM implementation where appropriate to deliver high-performance data access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}