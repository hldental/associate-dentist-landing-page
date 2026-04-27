export const metadata = {
  title: "Associate Dentist Opportunity | Westphalia, Missouri",
  description:
    "High-production associate dentist opportunity with strong patient flow, autonomy, and long-term upside in Westphalia, Missouri.",
};

const differentiators = [
  "Strong, consistent patient flow",
  "Assistant-driven model for efficiency",
  "CBCT, digital scanners, in-house lab, and 3D printing",
  "Real clinical autonomy in a non-corporate environment",
];

const fitSignals = [
  "You want to produce at a high level, not just maintain a schedule.",
  "You are open to living within 30 minutes of the practice.",
  "You value accountability, strong systems, and honest feedback.",
  "You want a long-term opportunity, not just another associate seat.",
];

const notForYou = [
  "You want a slow-paced, low-accountability environment.",
  "You prefer convenience over growth.",
  "You resist systems, delegation, or an assistant-driven model.",
  "You are looking for a typical corporate-style associate role.",
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

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Westphalia, Missouri • Associate Dentist Opportunity
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              $350K–$750K+ Associate Dentist Opportunity
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              High-production, assistant-driven private practice with strong
              patient flow, real autonomy, and long-term upside.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              This is not a typical corporate associate role. It is built for
              the right doctor who wants to produce at a high level, grow
              long-term, and build something meaningful in a rural community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-2xl bg-amber-500 px-6 py-4 text-base font-semibold text-stone-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Start Fit Check
              </a>
            </div>

            <p className="mt-4 text-sm text-stone-400">
              Takes about 3 minutes. We review each submission personally.
            </p>
          </div>

          <div className="grid gap-5 self-start">
            <Card className="p-8">
              <SectionLabel>Projected Compensation</SectionLabel>
              <div className="mt-4 text-4xl font-bold text-amber-400 sm:text-5xl">
                $350K–$750K+
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                Built on real production systems, strong patient flow, and an
                environment designed for efficiency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionLabel>Why This Role Is Different</SectionLabel>
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
            <div className="mt-4 space-y-4">
              {fitSignals.map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                  <p className="text-sm leading-6 text-stone-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-800 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500/80">
                Probably Not a Fit If
              </p>
              <div className="mt-4 space-y-4">
                {notForYou.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
                    <p className="text-sm leading-6 text-stone-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-4xl px-6 pb-20 lg:px-8">
        <Card className="p-8 lg:p-10">
          <SectionLabel>Apply</SectionLabel>
          <h3 className="mt-4 text-2xl font-bold text-white">
            Start with a fit check
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
            We are not looking for just any dentist. This short fit check helps
            us understand whether there is real alignment before we reach out.
          </p>

          <form
            className="mt-8 grid gap-5"
            action="https://formspree.io/f/mlgoaqow"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://associate-dentist-landing-page.vercel.app/thank-you" />
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
              What stood out most about this opportunity?
              <select
                name="interest_reason"
                required
                defaultValue=""
                className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="income">
                  High income potential ($350K–$750K+)
                </option>
                <option value="autonomy">
                  Clinical autonomy (non-corporate)
                </option>
                <option value="production">
                  High production environment
                </option>
                <option value="rural">
                  Rural / community lifestyle
                </option>
                <option value="growth">
                  Long-term growth opportunity
                </option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-stone-200">
              What type of practice are you looking for?
              <select
                name="practice_preference"
                required
                defaultValue=""
                className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="high-production">
                  High production / fast-paced
                </option>
                <option value="balanced">Balanced pace</option>
                <option value="slower">Slower pace / lower volume</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-stone-200">
              Timeline for your next move
              <select
                name="timeline"
                required
                defaultValue=""
                className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="now">Immediately</option>
                <option value="3-months">Within 3 months</option>
                <option value="6-months">Within 6 months</option>
                <option value="just-looking">Just exploring</option>
              </select>
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
      </section>
    </main>
  );
}
