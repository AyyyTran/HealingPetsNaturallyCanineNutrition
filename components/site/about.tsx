import Image from "next/image";

const body = "text-lg leading-8 text-darkblue/90";

const rustyConcerns = [
  "yeast infections",
  "leaky gut",
  "skin problems",
  "paw licking",
  "warts",
  "hives",
  "urine crystals",
  "compromised immune system",
] as const;

function DogPhoto({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
      />
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-grey px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
          Your consultant
        </p>
        <h2 className="mt-3 text-center text-3xl font-semibold text-darkblue sm:text-4xl">
          About Me
        </h2>

        <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-darkblue/10 lg:grid lg:grid-cols-[minmax(16rem,22rem)_1fr] lg:items-start">
          <DogPhoto
            src="/VestPugCurious.jpg"
            alt="Rusty the French Bulldog sitting in an orange hoodie"
            width={552}
            height={640}
            className="w-full min-w-0 lg:min-w-[16rem]"
          />
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className={body}>
              Hi there! I&apos;m <strong>Karissa</strong>, your dedicated Dog
              Nutrition Consultant. Passionate about promoting optimal health for
              your furry companions, I&apos;m here to guide you on a personalized
              journey to better nutrition.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-darkblue/10 sm:p-10">
            <h3 className="text-xl font-semibold text-secondary">Experience</h3>
            <p className={`mt-4 ${body}`}>
              With an education in evidence-based canine nutrition, multiple
              certifications, and years of experience working in the pet
              industry, I specialize in creating tailored nutrition plans for
              your dog&apos;s unique needs.
            </p>
          </article>
          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-darkblue/10 sm:p-10">
            <h3 className="text-xl font-semibold text-secondary">Mission</h3>
            <p className={`mt-4 ${body}`}>
              Let&apos;s make every meal a celebration of good health together. I
              am committed to providing evidence-based nutrition that improves
              your dog&apos;s overall well-being.
            </p>
          </article>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-3xl font-semibold text-darkblue">
            My Story
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-darkblue/70">
            How Rusty — and a lot of trial, error, and study — led here.
          </p>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <DogPhoto
              src="/VestPug.jpg"
              alt="Rusty the French Bulldog wearing his orange harness"
              width={418}
              height={640}
              className="mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-md"
            />
            <div className="space-y-5">
              <p className="text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
                Meeting Rusty
              </p>
              <p className={body}>
                Since my childhood, I have harbored a deep love for animals. When
                I welcomed my first pet, a French Bulldog, into my life, I was
                well aware of the breed&apos;s susceptibility to various health
                issues. Despite my thorough research beforehand, I was taken aback
                by the multitude of ailments my furry companion, whom I
                affectionately named Rusty, began to experience.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-darkblue/10 sm:p-10">
            <p className="text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
              What wasn&apos;t working
            </p>
            <p className={`mt-4 ${body}`}>
              Rusty was subjected to numerous rounds of antibiotics, each
              exacerbating his condition and leading to a myriad of health
              concerns such as yeast infections, leaky gut, skin problems, paw
              licking, warts, hives, urine crystals, and a compromised immune
              system. Frustrated by the lack of a definitive diagnosis and the
              ineffective conventional treatments, I delved into the realm of
              natural remedies and holistic healing methods.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {rustyConcerns.map((concern) => (
                <li
                  key={concern}
                  className="rounded-full bg-grey px-3 py-1.5 text-sm text-darkblue"
                >
                  {concern}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5 lg:order-2">
              <p className="text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
                What changed
              </p>
              <p className={body}>
                Through extensive research and experimentation, I discovered the
                profound impact of fresh, wholesome foods and supplements on
                Rusty&apos;s well-being. Witnessing remarkable improvements in his
                health within a mere few weeks, I was inspired to delve deeper
                into canine nutrition. Enrolling in specialized courses, I
                embarked on a journey to educate myself about the transformative
                power of proper nutrition in healing and preventing various
                health issues in pets.
              </p>
            </div>
            <DogPhoto
              src="/TwoDog.jpg"
              alt="Rusty sitting with a golden retriever"
              width={640}
              height={480}
              className="mx-auto w-full overflow-hidden rounded-3xl shadow-md lg:order-1"
            />
          </div>

          <div className="mt-14 rounded-3xl bg-secondary px-8 py-10 text-white sm:px-12">
            <p className="text-lg leading-8">
              Empowered by this newfound knowledge and personal experience, I
              became determined to assist fellow pet parents in nurturing and
              healing their beloved companions through natural, toxin-free
              methods. I came to realize that many of the health challenges faced
              by our furry friends can be mitigated and even avoided through a
              holistic approach to nutrition and well-being. Today, I am
              passionate about sharing this valuable insight with others,
              striving to make a positive difference in the lives of pets and
              their devoted caregivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
