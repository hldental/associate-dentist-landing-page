export const metadata = {
  title: "Associate Dentist Opportunity | Westphalia, Missouri",
  description:
    "High-production associate dentist opportunity with strong patient flow, autonomy, and long-term upside in Westphalia, Missouri.",
};

const values = [
  "Rooted in Community",
  "Compassionate Integrity",
  "Honest Accountability",
];

const differentiators = [
  "Strong, consistent patient flow",
  "Assistant-driven model for efficiency",
  "CBCT, digital scanners, in-house lab, and 3D printing",
  "Dedicated surgery and prosthetic clinic upstairs",
  "Growth-minded owner who is always improving the practice",
  "A real rural community where relationships still matter",
];

const fitSignals = [
  "You want to live within 30 minutes and be part of the community.",
  "You believe in treating patients the way you would treat your own family.",
  "You like accountability, honest feedback, and high standards.",
  "You thrive in an assistant-driven, efficient clinical environment.",
  "You want a place to grow long-term, not just another associate seat.",
];

const notForYou = [
  "You want a slow-paced, low-accountability environment.",
  "You prefer to stay disconnected from the community you serve.",
  "You resist systems, delegation, or expanded-function assistants.",
  "You are primarily motivated by convenience over growth.",
];

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
      <section className="relative isolate overflow-hidden border-b border-stone-800">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1800&auto=format&fit=crop"
          alt="Rural countryside landscape"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,15,0.35),rgba(18,17,15,0.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_32%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Westphalia, Missouri • Associate Dentist Opportunity
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              $350K–$750K+ Associate Dentist Opportunity
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              High-production, assistant-driven private practice. Strong patient
              flow. Real autonomy. No corporate ceilings.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
              This is not a typical associate role. It is built for the right
              doctor who wants to produce at a high level, grow long-term, and
              build something meaningful in a rural community.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              We are not looking for just any dentist. This short fit check
              helps us understand whether there is real alignment before we
              reach out.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-2xl bg-amber-500 px-6 py-4 text-base font-semibold text-stone-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Apply in 3 Minutes
              </a>
              <a
                href="#opportunity"
                className="rounded-2xl border border-stone-700 bg-stone-900/70 px-6 py-4 text-base font-semibold text-stone-100 transition hover:-translate-y-0.5 hover:border-stone-500"
              >
                Explore the Opportunity
              </a>
            </div>

            <p className="mt-4 text-sm text-stone-300">
              Prefer not to fill out the full form?
              <br />
              Text{" "}
              <span className="font-semibold text-amber-400">"DENTIST"</span>{" "}
              to{" "}
              <span className="font-semibold text-amber-400">
                [YOUR NUMBER]
              </span>{" "}
              or email{" "}
              <span className="font-semibold text-amber-400">
                [YOUR EMAIL]
              </span>
              .
            </p>
          </div>

          <div className="grid gap-5 self-start">
            <Card className="p-8">
              <SectionLabel>Projected Compensation</SectionLabel>
              <div className="mt-4 text-4xl font-bold text-amber-400 sm:text-5xl">
                $350K–$750K+
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                Built on actual production systems, strong patient flow, and an
                environment designed for efficiency.
              </p>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <Card key={value} className="p-5 text-center">
                  <p className="text-sm font-semibold leading-6 text-stone-100">
                    {value}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opportunity" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionLabel>The Opportunity</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for production—not limitation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
              Most associate roles cap your income by limiting your production.
              This practice is designed to do the opposite: strong systems,
              current technology, and an efficient clinical model that helps the
              right doctor thrive.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <Card key={item} className="p-6">
                  <p className="text-sm leading-6 text-stone-200">{item}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 lg:p-10">
            <SectionLabel>Who Thrives Here</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">
              This role is built for the right long-term fit.
            </h3>
            <div className="mt-6 space-y-4">
              {fitSignals.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                  <p className="text-sm leading-6 text-stone-300">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-950/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <Card className="p-8 lg:p-10">
            <SectionLabel>Culture</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">
              A rural, outdoors-driven way of life.
            </h3>
            <p className="mt-5 text-base leading-7 text-stone-300">
              Our patients and team value trust, hard work, family, and real
              conversation. This is a community where relationships matter and
              where the right doctor can build roots, not just fill a schedule.
            </p>
            <p className="mt-4 text-base leading-7 text-stone-300">
              The strongest candidates do not just want a better compensation
              package. They want a better kind of life and a better kind of
              practice.
            </p>
          </Card>

          <Card className="border-amber-700/30 bg-amber-950/10 p-8 lg:p-10">
            <SectionLabel>Filter</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">
              This probably is not for you if…
            </h3>
            <div className="mt-6 space-y-4">
              {notForYou.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
                  <p className="text-sm leading-6 text-stone-300">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8 lg:p-10">
            <SectionLabel>Before You Apply</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">
              What happens next
            </h3>
            <div className="mt-6 space-y-4">
              {[
                "Submit the fit check below.",
                "We review every submission personally.",
                "If there is strong alignment, we will reach out directly.",
                "Next step is a short intro call to see if it makes sense on both sides.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-stone-800 bg-stone-900/80 p-5"
                >
                  <p className="text-sm font-semibold text-amber-400">
                    {index + 1}.
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 lg:p-10">
            <SectionLabel>Apply</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">
              Start with a fit check
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              Takes about 3 minutes. No resume required. We are not looking for
              just any dentist—we are looking for the right person.
            </p>

            <form
              className="mt-8 grid gap-5"
              action="https://formspree.io/f/mlgoaqow"
              method="POST"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-stone-200">
                  Full Name
                  <input
                    name="name"
                    type="text"
                    required
                    className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                    placeholder="Dr. Jane Smith"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-stone-200">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                    placeholder="jane@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-stone-200">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                    placeholder="(555) 555-5555"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-stone-200">
                  Years of experience
                  <select
                    name="experience"
                    required
                    defaultValue=""
                    className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="new-grad">New grad / graduating soon</option>
                    <option value="1-3">1–3 years</option>
                    <option value="4-7">4–7 years</option>
                    <option value="8-plus">8+ years</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-stone-200">
                Are you open to living within 30 minutes of the practice?
                <select
                  name="relocation"
                  required
                  defaultValue=""
                  className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="yes">Yes</option>
                  <option value="maybe">Possibly / I want to learn more</option>
                  <option value="no">No</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-stone-200">
                What about this opportunity stands out to you?
                <textarea
                  name="why_fit"
                  required
                  rows={4}
                  className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                  placeholder="Tell us what about the opportunity, practice style, values, or lifestyle caught your attention."
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-stone-200">
                What kind of practice environment are you looking for next?
                <textarea
                  name="practice_fit"
                  required
                  rows={4}
                  className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                  placeholder="For example: pace, autonomy, mentorship, technology, culture, production expectations, or long-term growth."
                />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-amber-500 px-6 py-4 text-base font-semibold text-stone-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400"
                >
                  Submit Fit Check
                </button>
              </div>

              <p className="text-center text-xs text-stone-400">
                We review each submission personally.
              </p>
            </form>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-r from-stone-950 to-stone-900 px-8 py-10 shadow-2xl">
          <SectionLabel>Final Word</SectionLabel>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
            We are intentionally not for everyone.
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-300">
            But for the right person, this can be a career-defining opportunity.
          </p>
        </div>
      </section>
    </main>
  );
}
