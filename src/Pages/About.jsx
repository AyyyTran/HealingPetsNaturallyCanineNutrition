import React from 'react';

const About = () => {
  return (
    <div className="bg-grey">
      <h1 className="text-3xl ">About</h1>
      <div className="flex flex-col items-center py-4 lg:flex-row lg:w-3/5 lg:mx-auto lg:text-xl">
        <img
          src="/TwoDog.jpg"
          alt="TwoDogs"
          className="max-w-72 max-h-96 rounded-xl"
        />
        <p className="p-8">
          Hi there! I'm Karissa, your dedicated Dog Nutrition Consultant.
          Passionate about promoting optimal health for your furry companions,
          I'm here to guide you on a personalized journey to better nutrition.
        </p>
      </div>
      <div className="flex flex-col items-center py-4 lg:flex-row-reverse lg:w-3/5 lg:mx-auto lg:text-xl">
        <img
          src="/VestPugCurious.jpg"
          alt="CuriousVestPug"
          className="max-w-72 max-h-96 rounded-xl"
        />
        <p className="p-8">
          With a background in evidence-based canine nutrition, and multiple
          certifications, I create tailored plans to address your dog's unique
          needs. Let's make every meal a celebration of good health together!
        </p>
      </div>
      <div className="flex flex-col items-center py-4 lg:w-4/5 lg:mx-auto">
        <h2 className="text-3xl font-medium">My Story</h2>
        <img
          src="/VestPugCurious.jpg"
          alt="CuriousVestPug"
          className="max-w-72 max-h-96 rounded-xl"
        />
        <p className="px-8 py-2 lg:text-l">
          I have always had a love for animals and when I bought my first dog, a
          French Bulldog, I knew they were prone to many health issues as I did
          my research before hand. With all the research I had done before, I
          was still in for a shock with everything my little guy had and no one
          could fully diagnose the issues.
        </p>
        <p className="px-8 py-2 lg:text-l">
          He was put on antibiotics over and over again each time causing him
          more issues. Yeast issues, leaky gut, poor skin coat, licking paws,
          warts, hives/rashes, urine crystals and a weakened immune system. I
          started to do research and was amazed at all the natural remedies out
          there that work much better than antibiotics and steroids. I started
          him on fresh foods and supplements and the difference was incredible.
          I started to notice some improvements in just a couple weeks.
        </p>
        <p className="px-8 py-2 lg:text-l">
          With all the research I had done I started to take canine nutrition
          courses and realized I could help many other pet parents heal their
          dogs without toxins and chemicals. I now know that many of the health
          issues we deal with can be prevented with proper nutrition.
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
