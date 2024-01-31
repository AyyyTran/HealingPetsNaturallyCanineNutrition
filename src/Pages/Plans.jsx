import React from 'react';

const Plans = () => {
  return (
    <div className="bg-primary py-4">
      <h1 className="text-grey text-3xl py-4">Consultation Plans</h1>

      <div className="p-4 md:grid md:grid-cols-3">
        <div className="bg-grey rounded-xl p-4 w-3/4 md:w-4/5 mx-auto my-2 flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-darkblue">
            Supplement Plan
          </h2>
          <ul className="w-2/3 md:w-4/5 mx-auto list-disc py-4 justify-center">
            <li>Going over your dog&apos;s health history</li>
            <li>Your concerns/questions</li>
            <li>What specific supplements could be beneficial and why</li>
            <li>A Zoom or telephone consultation</li>
            <li>Consultation limited to 45 minutes</li>
            <li>Additional time can be purchased</li>
          </ul>
          <div className="font-bold py-4 text-xl ">$55 CAD</div>
        </div>

        <div className="bg-grey rounded-xl p-4 w-3/4 md:w-4/5 mx-auto my-2 flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-darkblue">
            Premium Consultation Plan
          </h2>
          <ul className="w-2/3 md:w-4/5 mx-auto list-disc py-4">
            <li>
              Going over your dog&apos;s health history, current, and past food
              as well as supplements
            </li>
            <li>
              Discuss the benefits of raw and fresh food and what you are open
              to feeding
            </li>
            <li>Customized food and supplement plan with weekly follow-ups</li>
            <li>
              Weekly follow-ups for 12 weeks to make sure everything is going
              well and to see if anything new should be added or removed
            </li>
            <li>
              Free bone broth recipe, which is great for joint, immune, gut
              health, and many more
            </li>
            <li>
              Discuss any concerns or questions regarding food, supplements, or
              other health questions
            </li>
            <li>Zoom or telephone consultations</li>
          </ul>
          <div className="font-bold py-4 text-xl">$130 CAD</div>
        </div>

        <div className="bg-grey rounded-xl p-4 w-3/4 md:w-4/5 mx-auto my-2 flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-darkblue">
            Nutrition Plan
          </h2>
          <ul className="w-2/3 md:w-4/5 mx-auto list-disc py-4">
            <li>
              Going over your dog&apos;s health history, current, and past food
              as well as supplements
            </li>
            <li>
              Discuss the benefits of raw and fresh food and what you are open
              to feeding
            </li>
            <li>Customized food and supplement plan with weekly follow-ups</li>
            <li>
              Weekly follow-ups for 12 weeks to make sure everything is going
              well and to see if anything new should be added or removed
            </li>
            <li>
              Free bone broth recipe, which is great for joint, immune, gut
              health, and many more
            </li>
            <li>
              Discuss any concerns or questions regarding food, supplements, or
              other health questions
            </li>
            <li>Zoom or telephone consultations</li>
          </ul>
          <div className="font-bold py-4 text-xl">$75 CAD</div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
