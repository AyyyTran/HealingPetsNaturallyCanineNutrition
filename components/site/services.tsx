const conditions = [
  "Allergies",
  "Yeast Issues",
  "Kidney Disease",
  "Digestive Issues",
  "Liver Disease",
  "Obesity",
  "Seizures",
  "IVDD (Intervertebral Disc Disease)",
  "Urinary/Bladder Crystals/Stones",
  "Pancreatitis",
  "Cancer-Support",
  "Joint Issues",
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-grey px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold text-darkblue sm:text-4xl">
          Services
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-darkblue/85">
          I provide guidance on the right path for food and supplements to
          manage and in some cases, prevent these health issues.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {conditions.map((condition) => (
            <li
              key={condition}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-darkblue shadow-sm ring-1 ring-darkblue/10 sm:text-base"
            >
              {condition}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-darkblue/70">And many more...</p>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-secondary px-6 py-8 text-center text-lg leading-relaxed text-white sm:px-10">
          <h3 className="text-xl font-semibold">Why Consult With Me?</h3>
          <p className="mt-4">
            Are you currently dealing with Allergies, Organ issues/disease,
            obesity, or any other health issues? Or are you proactively seeking to
            prevent these problems? You&apos;re in the right place. As a certified
            pet nutritionist, I&apos;ve been helping numerous families heal their
            pet companions.
          </p>
        </div>
      </div>
    </section>
  );
}
