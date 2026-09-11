import Image from "next/image";

const paragraphClass = "text-lg leading-relaxed text-gray-700";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-grey px-6 py-16">
      <h1 className="text-center text-3xl font-semibold text-gray-800">
        About Me
      </h1>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-8 lg:flex-row">
        <Image
          src="/VestPugCurious.jpg"
          alt="CuriousVestPug"
          width={288}
          height={384}
          className="max-h-96 w-auto rounded-xl shadow-2xl"
        />
        <div className="max-w-3xl space-y-4">
          <p className={paragraphClass}>
            Hi there! I&apos;m <strong>Karissa</strong>, your dedicated Dog
            Nutrition Consultant. Passionate about promoting optimal health for
            your furry companions, I&apos;m here to guide you on a personalized
            journey to better nutrition.
          </p>
          <h2 className="pt-2 text-2xl font-semibold text-gray-800">
            Experience
          </h2>
          <p className={paragraphClass}>
            With an education in evidence-based canine nutrition, multiple
            certifications, and years of experience working in the pet
            industry, I specialize in creating tailored nutrition plans for
            your dog&apos;s unique needs.
          </p>
          <h2 className="pt-2 text-2xl font-semibold text-gray-800">Mission</h2>
          <p className={paragraphClass}>
            Let&apos;s make every meal a celebration of good health together. I
            am committed to providing evidence-based nutrition that improves
            your dog&apos;s overall well-being.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-8 lg:flex-row-reverse">
        <Image
          src="/TwoDog.jpg"
          alt="TwoDogs"
          width={288}
          height={384}
          className="max-h-96 w-auto rounded-xl"
        />
        <p className={`${paragraphClass} max-w-3xl`}>
          With an education in evidence-based canine nutrition, multiple
          certifications, as well as many years of experience working in the pet
          industry, I create tailored plans to address your dog&apos;s unique
          needs. Let&apos;s make every meal a celebration of good health
          together.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-6">
        <h2 className="text-3xl font-medium">My Story</h2>
        <p className={paragraphClass}>
          Since my childhood, I have harbored a deep love for animals. When I
          welcomed my first pet, a French Bulldog, into my life, I was well
          aware of the breed&apos;s susceptibility to various health issues.
          Despite my thorough research beforehand, I was taken aback by the
          multitude of ailments my furry companion, whom I affectionately named
          Rusty, began to experience.
        </p>
        <p className={paragraphClass}>
          Rusty was subjected to numerous rounds of antibiotics, each
          exacerbating his condition and leading to a myriad of health concerns
          such as yeast infections, leaky gut, skin problems, paw licking,
          warts, hives, urine crystals, and a compromised immune system.
          Frustrated by the lack of a definitive diagnosis and the ineffective
          conventional treatments, I delved into the realm of natural remedies
          and holistic healing methods.
        </p>
        <Image
          src="/VestPug.jpg"
          alt="VestPug"
          width={288}
          height={384}
          className="my-4 max-h-96 w-auto rounded-xl"
        />
        <p className={paragraphClass}>
          Through extensive research and experimentation, I discovered the
          profound impact of fresh, wholesome foods and supplements on
          Rusty&apos;s well-being. Witnessing remarkable improvements in his
          health within a mere few weeks, I was inspired to delve deeper into
          canine nutrition. Enrolling in specialized courses, I embarked on a
          journey to educate myself about the transformative power of proper
          nutrition in healing and preventing various health issues in pets.
        </p>
        <p className={paragraphClass}>
          Empowered by this newfound knowledge and personal experience, I became
          determined to assist fellow pet parents in nurturing and healing their
          beloved companions through natural, toxin-free methods. I came to
          realize that many of the health challenges faced by our furry friends
          can be mitigated and even avoided through a holistic approach to
          nutrition and well-being. Today, I am passionate about sharing this
          valuable insight with others, striving to make a positive difference
          in the lives of pets and their devoted caregivers.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl text-center">
        <h2 className="p-4 text-2xl font-medium">Why Consult With Me?</h2>
        <div className="rounded-xl bg-primary p-8 text-white">
          Are you currently dealing with Allergies, Organ issues/disease,
          obesity, or any other health issues? Or are you proactively seeking to
          prevent these problems? You&apos;re in the right place. As a certified
          pet nutritionist, I&apos;ve been helping numerous families heal their
          pet companions.
        </div>
      </div>
    </section>
  );
}
