import React from 'react';

const Plans = () => {
  return (
    <div className="bg-primary py-4 plans">
      <h1 className="text-grey text-3xl py-4">Consultation Plans</h1>

      <div className="p-4 md:grid md:grid-cols-3">
        <div className="bg-grey rounded-xl p-4 w-3/4 md:w-4/5 mx-auto my-2 flex flex-col justify-between shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 lg:hover:scale-10">
          <h2 className="text-xl font-semibold text-darkblue">
            Supplement Plan
          </h2>
          <ul className="w-2/3 md:w-4/5 mx-auto list-disc py-4 justify-center text-start">
            <li>Dog&apos;s health history</li>
            <li>Your goals and concerns</li>
            <li>What specific supplements could be beneficial and why</li>
            <li>A 45 minute consultation via Zoom or telephone</li>
            <li>Additional time can be purchased $20 - 15 minutes</li>
          </ul>
          <div className="font-bold py-4 text-xl ">$75 CAD</div>
        </div>

        <div className="bg-grey rounded-xl p-4 w-3/4 md:w-4/5 mx-auto my-2 flex flex-col justify-between shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 lg:hover:scale-10">
          <h2 className="text-xl font-semibold text-darkblue">
            Nutrition Plan
          </h2>
          <ul className="w-2/3 md:w-4/5 mx-auto list-disc py-4 text-start">
            <li>Dog&apos;s health history</li>
            <li>Current and past food as well as supplements</li>
            <li>Your goals and concerns</li>
            <li>
              Customized food plan according to health status and activity level
              of your dog
            </li>
            <li>
              Discuss the benefits of raw/fresh food and what you are open to
              feeding
            </li>
            <li>Premade fresh food and homemade recipes will be discussed</li>
            <li>
              Weekly follow ups for 6 weeks for further protocol adjustments if
              needed
            </li>
            <li>1 hour consultation via Zoom or telephone</li>
            <li>Additional time can be purchased $20 - 15 minutes</li>
          </ul>
          <div className="font-bold py-4 text-xl">$120 CAD</div>
        </div>

        <div className="bg-grey rounded-xl p-4 w-3/4 md:w-4/5 mx-auto my-2 flex flex-col justify-between shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 lg:hover:scale-10">
          <h2 className="text-xl font-semibold text-darkblue">
            Premium Consultation Plan
          </h2>
          <ul className="w-2/3 md:w-4/5 mx-auto list-disc py-4 text-start">
            <li>Dog&apos;s health history</li>
            <li>Current and past food as well as supplements</li>
            <li>Your goals and concerns</li>
            <li>
              Discuss the benefits of raw/fresh food and what you are open to
              feeding
            </li>
            <li>Customized food and supplement plan with weekly follow ups</li>
            <li>
              Weekly follow ups for 12 weeks for further protocol adjustments if
              needed
            </li>
            <li>
              Free bone broth recipe, which is great for joint, immune, gut
              health and many more
            </li>
            <li>90 minute consultation via Zoom or telephone</li>
            <li>Additional time can be purchased $20 - 15 minutes</li>
          </ul>
          <div className="font-bold py-4 text-xl">$160 CAD</div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
