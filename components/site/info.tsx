import Link from "next/link";

export function Info() {
  return (
    <section
      id="info"
      className="scroll-mt-24 bg-grey px-6 py-16 text-center"
    >
      <h2 className="text-2xl text-secondary">
        The Real Culprit: Low-Quality Pet Food
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed">
        Many health issues stem from low-quality pet food. Pet food companies
        prioritize marketing and profit over your pet&apos;s health. They can
        include undisclosed ingredients, chemicals, and even garbage in their
        products, contributing to the rising prevalence of health issues in our
        beloved companions.
      </p>
      <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed">
        Let&apos;s work together to provide your pet with the nutrition they
        deserve — promoting longevity, vitality, and overall well-being.
      </p>
      <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-primary p-6 text-grey">
        Ready to embark on a journey to better health for your furry friend?{" "}
        <Link
          href="/#services"
          className="px-1 underline hover:text-secondary"
        >
          Explore Services
        </Link>{" "}
        or{" "}
        <Link href="/book" className="px-1 underline hover:text-secondary">
          Contact Me
        </Link>{" "}
        for a consultation.
      </div>
    </section>
  );
}
