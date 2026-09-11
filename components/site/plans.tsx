import { PLANS } from "@/lib/plans";

export function Plans() {
  return (
    <section id="plans" className="scroll-mt-24 bg-primary px-6 py-16">
      <h1 className="text-center text-3xl text-grey">Consultation Plans</h1>
      <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-grey">
        Note: $30 Deposit is required to reserve your consultation. The
        remainder to be paid on the first day of consultation. At this time we
        only accept E -transfers.
      </p>
      <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.id}
            className="flex h-full flex-col rounded-xl bg-grey p-6 shadow-xl transition hover:-translate-y-0.5"
          >
            <h2 className="text-center text-xl font-semibold text-darkblue">
              {plan.name}
            </h2>
            <ul className="mx-auto my-6 flex-1 list-disc space-y-2 pl-5 text-left">
              {plan.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="text-center text-xl font-bold">
              ${plan.priceCad} CAD
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
