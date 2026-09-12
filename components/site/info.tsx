import Link from "next/link";

export function Info() {
  return (
    <section id="info" className="scroll-mt-24 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-darkblue sm:text-3xl">
          The Real Culprit: Low-Quality Pet Food
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-darkblue/85">
          Many health issues stem from low-quality pet food. Pet food companies
          prioritize marketing and profit over your pet&apos;s health. They can
          include undisclosed ingredients, chemicals, and even garbage in their
          products, contributing to the rising prevalence of health issues in our
          beloved companions.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-darkblue/85">
          Let&apos;s work together to provide your pet with the nutrition they
          deserve — promoting longevity, vitality, and overall well-being.
        </p>
        <p className="mt-8 rounded-2xl bg-primary px-6 py-5 text-left text-white sm:text-center">
          Ready to embark on a journey to better health for your furry friend?{" "}
          <Link href="/#services" className="font-semibold underline underline-offset-2">
            Explore Services
          </Link>{" "}
          or{" "}
          <Link href="/book" className="font-semibold underline underline-offset-2">
            Contact Me
          </Link>{" "}
          for a consultation.
        </p>
      </div>
    </section>
  );
}
