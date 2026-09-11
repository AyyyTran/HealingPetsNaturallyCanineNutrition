export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-3xl">Services</h1>
        <div className="rounded-2xl bg-primary p-6 text-grey md:p-10 md:text-xl">
          <div>
            I provide guidance on the right path for food and supplements to
            manage and in some cases, prevent these health issues.
          </div>
          <div className="grid grid-cols-1 gap-4 p-6 text-base font-semibold sm:grid-cols-2 md:text-lg">
            <ul className="list-disc space-y-1 pl-5">
              <li>Allergies</li>
              <li>Yeast Issues</li>
              <li>Kidney Disease</li>
              <li>Digestive Issues</li>
              <li>Liver Disease</li>
              <li>Obesity</li>
              <li>Seizures</li>
            </ul>
            <ul className="list-disc space-y-1 pl-5">
              <li>IVDD (Intervertebral Disc Disease)</li>
              <li>Urinary/Bladder Crystals/Stones</li>
              <li>Pancreatitis</li>
              <li>Cancer-Support</li>
              <li>Joint Issues</li>
            </ul>
          </div>
          <p>And many more...</p>
        </div>
      </div>
    </section>
  );
}
