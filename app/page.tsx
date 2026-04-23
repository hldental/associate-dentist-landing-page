<label className="grid gap-2 text-sm font-medium text-stone-200">
  What stood out most about this opportunity?
  <select
    name="interest_reason"
    required
    defaultValue=""
    className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
  >
    <option value="" disabled>Select one</option>
    <option value="income">High income potential ($350K–$750K+)</option>
    <option value="autonomy">Clinical autonomy (non-corporate)</option>
    <option value="production">High production environment</option>
    <option value="rural">Rural / community lifestyle</option>
    <option value="growth">Long-term growth opportunity</option>
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
    <option value="" disabled>Select one</option>
    <option value="high-production">High production / fast-paced</option>
    <option value="balanced">Balanced pace</option>
    <option value="slower">Slower pace / lower volume</option>
  </select>
</label>

<label className="grid gap-2 text-sm font-medium text-stone-200">
  Anything else you'd want us to know? (optional)
  <textarea
    name="notes"
    rows={3}
    className="rounded-2xl border border-stone-700 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-500"
    placeholder="Optional — anything important about your situation, timeline, or goals"
  />
</label>
