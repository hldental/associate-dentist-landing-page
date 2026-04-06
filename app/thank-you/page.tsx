export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#12110f] px-6 text-stone-100">
      <div className="max-w-xl rounded-3xl border border-stone-800 bg-stone-950/80 p-10 text-center shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-500/80">
          Thank you
        </p>
        <h1 className="mt-4 text-4xl font-bold">Your fit check was submitted.</h1>
        <p className="mt-4 text-base leading-7 text-stone-300">
          We appreciate your interest. If there is strong alignment, someone from the practice will reach out with next steps.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
        >
          Return to the landing page
        </a>
      </div>
    </main>
  );
}
