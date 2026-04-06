export const metadata = {
  title: "Associate Dentist Opportunity | Westphalia, Missouri",
  description:
    "A rugged, outdoors-driven associate dentist opportunity in Westphalia, Missouri for candidates who value community, integrity, accountability, and rural life.",
};

const values = [
  "Rooted in Community",
  "Compassionate Integrity",
  "Honest Accountability",
];

const differentiators = [
  "$350K–$750K+ projected earning potential",
  "CBCT, digital scanners, in-house lab, and 3D printing",
  "Dedicated surgery and prosthetic clinic upstairs",
  "Expanded-function assistants in a fast-paced workflow",
  "Growth-minded owner who is always improving the practice",
  "A real rural community where relationships still matter",
];

const fitSignals = [
  "You want to live within 30 minutes and be part of the community.",
  "You believe in treating patients the way you would treat your own family.",
  "You like accountability, honest feedback, and high standards.",
  "You thrive in an assistant-driven, efficient clinical environment.",
  "You appreciate the outdoors, wildlife, hard work, and grounded living.",
];

const notForYou = [
  "You want a slow-paced, low-accountability environment.",
  "You prefer to stay disconnected from the community you serve.",
  "You resist systems, delegation, or expanded-function assistants.",
  "You are looking for convenience more than purpose.",
];

const fitCheckQuestions = [
  "Would you be proud to treat every patient like your own family?",
  "Do you want to build roots in a rural Missouri community?",
  "Would your personality and lifestyle connect naturally with our patients?",
  "Are you looking for a place to grow long-term, not just another associate seat?",
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
          alt="Rural countryside landscape similar to Westphalia Missouri"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,15,0.35),rgba(18,17,15,0.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_32%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Westphalia, Missouri • Associate Dentist Opportunity
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Built on character. Rooted in community. Designed for the right dentist.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              This is not a corporate associate role. This is a high-performance rural practice for someone who believes doing the right thing still matters, who wants to work hard, and who wants to build a life near the people they serve.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
              If you care about integrity, accountability, strong systems, advanced dentistry, and an outdoors-driven lifestyle, this may be the fit you have been looking for.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#fit-check"
                className="rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400"
              >
                Start the Fit Check
              </a>
              <a
                href="#opportunity"
                className="rounded-2xl border border-stone-700 bg-stone-900/70 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:-translate-y-0.5 hover:border-stone-500"
              >
                Explore the Opportunity
              </a>
            </div>
          </div>

          <div className="grid gap-5 self-start">
            <Card className="p-8">
              <SectionLabel>Projected Compensation</SectionLabel>
              <div className="mt-4 text-4xl font-bold text-amber-400 sm:text-5xl">$350K–$750K+</div>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                High-producing associate role with a proven clinical model, strong patient flow, and room for long-term growth.
              </p>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <Card key={value} className="p-5 text-center">
                  <p className="text-sm font-semibold leading-6 text-stone-100">{value}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opportunity" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <SectionLabel>The opportunity</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Advanced dentistry with real-world values.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
              We have built an efficient, assistant-driven practice where the systems are strong, the technology is current, and the expectations are high. The goal is simple: help the right doctor do excellent dentistry in a place where they can truly belong.
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
            <SectionLabel>Who thrives here</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">This role is about long-term fit.</h3>
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
            <h3 className="mt-4 text-2xl font-bold text-white">A rural, outdoors-driven way of life.</h3>
            <p className="mt-5 text-base leading-7 text-stone-300">
              Our patients and team value trust, hard work, family, and real conversation. Hunting, wildlife, land, deer season, and being outside are part of the culture here. Those things are not requirements, but they often signal a natural fit.
            </p>
            <p className="mt-4 text-base leading-7 text-stone-300">
              The strongest candidates do not just want a better compensation package. They want a better kind of life and a better kind of practice.
            </p>
          </Card>

          <Card className="border-amber-700/30 bg-amber-950/10 p-8 lg:p-10">
            <SectionLabel>Filter</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">This probably is not for you if…</h3>
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

      <section id="fit-check" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-8 lg:p-10">
            <SectionLabel>Before you apply</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">Ask yourself these four questions.</h3>
            <div className="mt-6 space-y-4">
              {fitCheckQuestions.map((question, index) => (
                <div key={question} className="rounded-2xl border border-stone-800 bg-stone-900/80 p-5">
                  <p className="text-sm font-semibold text-amber-400">{index + 1}.</p>
                  <p className="mt-2 text-sm leading-6 text-stone-300">{question}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 lg:p-10">
            <SectionLabel>Apply</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold text-white">Start with a fit check.</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
              Use this form to capture serious candidates before a full application. The included API route writes submissions to the server log so a developer can replace it with email, an ATS, or a CRM in minutes.
            </p>

            <form className="mt-8 grid gap-5" action="https://formspree.io/f/YOURID" method="POST">
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
                  Open to living within 30 minutes?
                  <select
                    name="relocation"
                    className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="maybe">Possibly / want to learn more</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-stone-200">
                Why does this opportunity stand out to you?
                <textarea
                  name="why_fit"
                  required
                  rows={5}
                  className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                  placeholder="Tell us what about the values, pace, lifestyle, or opportunity connects with you."
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-stone-200">
                What do you enjoy outside of dentistry?
                <textarea
                  name="outside_interests"
                  required
                  rows={5}
                  className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
                  placeholder="Family, faith, outdoors, hunting, wildlife, athletics, community, travel, etc."
                />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="rounded-2xl bg-amber-500 px-6 py-4 text-sm font-semibold text-stone-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400"
                >
                  Submit Interest Form
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-r from-stone-950 to-stone-900 px-8 py-10 shadow-2xl">
          <SectionLabel>Final word</SectionLabel>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
            We are not trying to attract everyone.
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-7 text-stone-300">
            We are trying to attract the right person: someone with strong character, honest communication, a competitive desire to improve, and a real respect for community, relationships, and meaningful work.
          </p>
        </div>
      </section>
    </main>
  );
}
