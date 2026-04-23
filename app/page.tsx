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

  <p className="text-xs text-stone-400 text-center">
    Takes about 3 minutes. We review each submission personally.
  </p>
</form>
