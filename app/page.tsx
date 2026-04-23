export const metadata = {
  title: "Associate Dentist Opportunity | Westphalia, Missouri",
  description:
    "High-production associate dentist opportunity with strong patient flow, autonomy, and $350K–$750K+ potential.",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-500/80">
      {children}
    </p>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-stone-800 bg-stone-950/80 shadow-2xl backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#12110f] text-stone-100">

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-stone-800">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1800&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,15,0.35),rgba(18,17,15,0.82))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">

            <div className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Westphalia, Missouri • Associate Dentist Opportunity
            </div>

            <h1 className="mt-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              $350K–$750K+ Associate Dentist Opportunity
            </h1>

            <p className="mt-6 text-lg text-stone-200">
              High-production, assistant-driven private practice.
              Strong patient flow. Real autonomy. No corporate ceilings.
            </p>

            <p className="mt-4 text-lg text-stone-300">
              This is not for everyone — but for the right doctor,
              it’s a career-defining opportunity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-2xl bg-amber-500 px-6 py-4 text-base font-semibold text-stone-950 shadow-lg hover:bg-amber-400"
              >
                Apply in 2 Minutes
              </a>
            </div>

            <p className="mt-4 text-sm text-stone-300">
              Prefer not to fill out the form?
              <br />
              Text <span className="text-amber-400 font-semibold">"DENTIST"</span> to{" "}
              <span className="text-amber-400 font-semibold">[YOUR NUMBER]</span>
            </p>

          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionLabel>The Opportunity</SectionLabel>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Built for production—not limitation.
        </h2>

        <p className="mt-5 max-w-2xl text-stone-300">
          Most associate roles cap your income by limiting your production.
          This system is designed to do the opposite.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            "Strong, consistent patient flow",
            "Assistant-driven model for efficiency",
            "Modern technology and systems",
            "Real clinical autonomy",
          ].map((item) => (
            <Card key={item} className="p-6">
              <p>{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section className="border-y border-stone-800 bg-stone-950/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionLabel>Culture</SectionLabel>

          <h3 className="mt-4 text-2xl font-bold text-white">
            A different kind of practice environment.
          </h3>

          <p className="mt-5 text-stone-300">
            This is a rural, community-driven practice built on trust,
            accountability, and doing things the right way.
          </p>

          <p className="mt-4 text-stone-300">
            People who thrive here value hard work, relationships,
            and a grounded lifestyle.
          </p>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Card className="p-8">

          <SectionLabel>Apply</SectionLabel>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Start with a quick fit check
          </h3>

          <p className="mt-4 text-stone-300">
            Takes 2–3 minutes. No resume required.
          </p>

          <form
            className="mt-8 grid gap-5"
            action="https://formspree.io/f/mlgoaqow"
            method="POST"
          >
            <input name="name" placeholder="Full Name" required className="p-3 bg-stone-900 rounded-xl" />
            <input name="email" type="email" placeholder="Email" required className="p-3 bg-stone-900 rounded-xl" />
            <input name="phone" placeholder="Phone" required className="p-3 bg-stone-900 rounded-xl" />

            <button className="bg-amber-500 text-black p-4 rounded-xl font-semibold">
              Apply Now
            </button>
          </form>

        </Card>
      </section>

    </main>
  );
}
