import React from 'react';

const About = () => {
  return (
    <div className="bg-grey about">
      <h1 className="text-3xl pt-8">About</h1>
      <div className="flex flex-col items-center py-4 lg:flex-row lg:w-3/5 lg:mx-auto lg:text-xl">
        <img
          src="/VestPugCurious.jpg"
          alt="CuriousVestPug"
          className="max-w-72 max-h-96 rounded-xl shadow-2xl"
        />
        <p className="p-4 my-2 ">
          Hi there! I'm Karissa, your dedicated Dog Nutrition Consultant.
          Passionate about promoting optimal health for your furry companions,
          I'm here to guide you on a personalized journey to better nutrition.
        </p>
      </div>
      <div className="flex flex-col items-center py-4 lg:flex-row-reverse lg:w-3/5 lg:mx-auto lg:text-xl">
        <img
          src="/TwoDog.jpg"
          alt="TwoDogs"
          className="max-w-72 max-h-96 rounded-xl"
        />
        <p className="p-8">
          With a background in evidence-based canine nutrition, and multiple
          certifications, I create tailored plans to address your dog's unique
          needs. Let's make every meal a celebration of good health together!
        </p>
      </div>

      <div className="flex flex-col items-center py-4 lg:w-4/5 lg:mx-auto">
        <h2 className="text-3xl font-medium py-4">My Story</h2>
        <p className="px-8 py-4 lg:text-l">
          Since my childhood, I have harbored a deep love for animals. When I
          welcomed my first pet, a French Bulldog, into my life, I was well
          aware of the breed's susceptibility to various health issues. Despite
          my thorough research beforehand, I was taken aback by the multitude of
          ailments my furry companion, whom I affectionately named Rusty, began
          to experience.
        </p>
        <p className="px-8 py-4 lg:text-l">
          Rusty was subjected to numerous rounds of antibiotics, each
          exacerbating his condition and leading to a myriad of health concerns
          such as yeast infections, leaky gut, skin problems, paw licking,
          warts, hives, urine crystals, and a compromised immune system.
          Frustrated by the lack of a definitive diagnosis and the ineffective
          conventional treatments, I delved into the realm of natural remedies
          and holistic healing methods.
        </p>
        <img
          src="/VestPug.jpg"
          alt="VestPug"
          className="max-w-72 max-h-96 rounded-xl my-4"
        />
        <p className="px-8 py-2 lg:text-l">
          Through extensive research and experimentation, I discovered the
          profound impact of fresh, wholesome foods and supplements on Rusty’s
          well-being. Witnessing remarkable improvements in his health within a
          mere few weeks, I was inspired to delve deeper into canine nutrition.
          Enrolling in specialized courses, I embarked on a journey to educate
          myself about the transformative power of proper nutrition in healing
          and preventing various health issues in pets.
        </p>
        <p className="px-8 py-2 lg:text-l">
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

      <div className="flex flex-col items-center justify-center mx-auto w-4/5 lg:text-l py-4">
        <h2 className="text-2xl font-medium p-4">Why Consult With Me?</h2>
        <div className="p-8 rounded-xl bg-primary text-white text-center">
          Are you currently dealing with Allergies, Organ issues/disease,
          obesity, cancer, or any other health issues? Or are you proactively
          seeking to prevent these problems? You're in the right place. As a
          certified pet nutritionist, I've been helping numerous families heal
          their pet companions.
        </div>
      </div>
    </div>
  );
};

export default About;
