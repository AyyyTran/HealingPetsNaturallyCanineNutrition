import React from 'react';

const About = () => {
  return (
    <div className="bg-grey about">
      <h1 class="text-3xl font-semibold text-center text-gray-800 my-6">About Me</h1>
      <div className="flex flex-col items-center py-4 lg:flex-row lg:w-3/5 lg:mx-auto lg:text-xl">
        <img
          src="/VestPugCurious.jpg"
          alt="CuriousVestPug"
          className="max-w-72 max-h-96 rounded-xl shadow-2xl"
        />
        <div class="max-w-3xl mx-auto p-6">
          
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            Hi there! I'm <strong>Karissa</strong>, your dedicated Dog Nutrition Consultant. Passionate about promoting optimal health for your furry companions, I'm here to guide you on a personalized journey to better nutrition.
          </p>

          <h2 class="text-2xl font-semibold text-gray-800 mt-6 mb-2">Experience</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            With an education in evidence-based canine nutrition, multiple certifications, and years of experience working in the pet industry, I specialize in creating tailored nutrition plans for your dog's unique needs.
          </p>

          <h2 class="text-2xl font-semibold text-gray-800 mt-6 mb-2">Mission</h2>
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            Let's make every meal a celebration of good health together. I am committed to providing evidence-based nutrition that improves your dog's overall well-being.
          </p>
        </div>

      </div>
      <div className="flex flex-col items-center py-4 lg:flex-row-reverse lg:w-3/5 lg:mx-auto lg:text-xl">
        <img
          src="/TwoDog.jpg"
          alt="TwoDogs"
          className="max-w-72 max-h-96 rounded-xl"
        />
        <div class="max-w-3xl mx-auto p-6">
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            With an education in evidence-based canine nutrition, multiple certifications, as well as many years of experience working in the pet industry, I create tailored plans to address your dog&apos;s unique needs. Let&apos;s make every meal a celebration of good health together.
          </p>
        </div>

      </div>

      <div className="flex flex-col items-center py-4 lg:w-4/5 lg:mx-auto">
        <h2 className="text-3xl font-medium py-4">My Story</h2>
        <p className="px-8 py-4 text-lg text-gray-700 leading-relaxed mb-6">
          Since my childhood, I have harbored a deep love for animals. When I welcomed my first pet, a French Bulldog, into my life, I was well aware of the breed's susceptibility to various health issues. Despite my thorough research beforehand, I was taken aback by the multitude of ailments my furry companion, whom I affectionately named Rusty, began to experience.
        </p>

        <p className="px-8 py-4 text-lg text-gray-700 leading-relaxed mb-6">
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
        <p className="px-8 py-4 text-lg text-gray-700 leading-relaxed mb-6">
          Through extensive research and experimentation, I discovered the
          profound impact of fresh, wholesome foods and supplements on
          Rusty&apos;s well-being. Witnessing remarkable improvements in his
          health within a mere few weeks, I was inspired to delve deeper into
          canine nutrition. Enrolling in specialized courses, I embarked on a
          journey to educate myself about the transformative power of proper
          nutrition in healing and preventing various health issues in pets.
        </p>
        <p className="px-8 py-4 text-lg text-gray-700 leading-relaxed mb-6">
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
          obesity, or any other health issues? Or are you proactively
          seeking to prevent these problems? You're in the right place. As a
          certified pet nutritionist, I've been helping numerous families heal
          their pet companions.
        </div>
      </div>
    </div>
  );
};

export default About;
