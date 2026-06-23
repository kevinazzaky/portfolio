const biodata = [
  ["Nama", "Renald Kevin Azzaky"],
  ["Program Studi", "Teknologi Informasi"],
  ["Semester", "4"],
  ["Minat Bidang", "Web Development, Internet of Things (IoT), UI/UX, Database"],
  ["Email", "kevinazzaky1@gmail.com"],
  ["Domisili", "Badung, Bali"],
];

function Biodata() {
  return (
    <section id="biodata" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
            Personal Information
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Biodata Diri</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {biodata.map(([label, value]) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-lime-400/50 hover:bg-lime-400/10"
            >
              <p className="text-sm text-lime-400">{label}</p>
              <p className="mt-2 font-medium text-slate-200 group-hover:text-white">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Biodata;
