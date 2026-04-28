export default function Page() {
  return (
    <main className="min-h-screen bg-[#12110f] text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">

        {/* HEADLINE */}
        <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
          Associate Dentist Opportunity
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          $350K–$750K+ Production Opportunity
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          High-demand practice. Full autonomy. No corporate structure.
        </p>

        {/* SUBTEXT */}
        <p className="mt-6 text-base text-gray-400">
          This is a quick 2-minute fit check — not a formal application.
        </p>

        {/* FORM */}
        <form
          className="mt-10 grid gap-4"
          action="https://formspree.io/f/mlgoaqow"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://associate-dentist-landing-page.vercel.app/thank-you"
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            className="p-3 rounded bg-black border border-gray-700"
          />

          <button
            type="submit"
            className="mt-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold py-3 rounded-xl"
          >
            See If This Is a Fit
          </button>
        </form>

        {/* TRUST / REASSURANCE */}
        <p className="mt-6 text-sm text-gray-500">
          We review every submission personally. If there’s alignment, we’ll reach out directly.
        </p>

      </div>
    </main>
  );
}
