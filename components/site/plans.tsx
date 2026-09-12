import Link from "next/link";
import { PLANS } from "@/lib/plans";

export function Plans() {
  return (
    <section id="plans" className="scroll-mt-24 bg-grey px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl xl:max-w-7xl">
        <h2 className="text-center text-3xl font-semibold text-darkblue sm:text-4xl">
          Consultation Plans
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-darkblue/80 sm:text-lg">
          Note: $30 Deposit is required to reserve your consultation. The
          remainder to be paid on the first day of consultation. At this time we
          only accept E -transfers.
        </p>
        <div className="mt-10 grid gap-8 xl:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className="flex h-full flex-col rounded-2xl border border-darkblue/10 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-center text-xl font-semibold text-darkblue">
                {plan.name}
              </h3>
              <ul className="my-6 flex-1 list-disc space-y-2.5 pl-5 text-left text-base leading-relaxed text-darkblue/90">
                {plan.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="text-center text-2xl font-bold text-secondary">
                ${plan.priceCad} CAD
              </p>
              <Link
                href="/book"
                className="mt-5 block rounded-full bg-primary px-4 py-3 text-center font-semibold text-white transition hover:bg-secondary"
              >
                Book this plan
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
