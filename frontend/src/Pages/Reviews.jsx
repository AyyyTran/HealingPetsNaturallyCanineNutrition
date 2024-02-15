import React from 'react';

const Reviews = () => {
  return (
    <div className="reviews">
      <h1 className="text-3xl mt-4 p-8">Reviews</h1>
      <div className="flex flex-col justify-between">
        <div className="bg-secondary text-grey rounded-lg text-light w-4/5 h-fit lg:w-4/5 items-center my-2 shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 mx-auto">
          <div className="p-4 pt-8">
            <blockquote>
              <p className="text-lg lg:text-xl text-gray-900">
                "I'm so grateful for the help that Karissa gave me when my pup
                had an ear infection. She was 100% correct when telling me to
                change my dog's diet. A week after making the switch to another
                protein food, my dog was better. Thank you for sharing your
                in-depth knowledge with me, Karissa, and for explaining the hows
                and whys regarding my pup's health. "
              </p>
            </blockquote>
            <div>
              <p className="text-xl lg:text-2xl font-medium p-4 flex justify-end">
                - Jay Lang
              </p>
            </div>
          </div>
        </div>
        <div className="bg-secondary text-grey rounded-lg text-light w-4/5 h-fit lg:w-4/5 items-center my-2 shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 mx-auto">
          <div className="p-4 pt-8">
            <blockquote>
              <p className="text-lg text-gray-900">
                "Our beloved boy Miles was exhibiting signs of IVDD and after
                numerous visits to several animal hospitals as far as six hours
                away from our permanent residence, with the last visit being
                with a highly decorated neurologist which resulted in a MRI. The
                neurologist discovered that Miles had a herniated disc and
                instructed use to put him on 30 days crate rest and prescribed a
                series of steroids. The doctor insinuated that surgery would be
                likely to fix the problem. After returning home we followed the
                doctor&apos;s instructions while staying in contact with
                Karissa. With her, we further discussed our frenchie&apos;s diet
                and the possibility that his condition could be being
                exasperated by the carbs in his diet. She then guided us,
                including doing at great deal of research on her end, to assist
                us in finding a company that could delivery high quality raw dog
                food that would meet the nutritional needs of our frenchie.
                Thanks to her and her knowledge our little Miles has been doing
                well for a year now. To this point we have been blessed to avoid
                a costly and grueling procedure. Karissa is truly a caring
                individual with a wealth of knowledge! We are very grateful for
                her help! "
              </p>
            </blockquote>
            <div>
              <p className="text-xl lg:text-2xl font-medium p-4 flex justify-end">
                - Jeff and Natalie
              </p>
            </div>
          </div>
        </div>
        <div className="bg-secondary text-grey rounded-lg text-light w-4/5 h-fit lg:w-4/5 items-center my-2 shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 mx-auto">
          <div className="p-4 pt-8">
            <blockquote>
              <p className="text-lg lg:text-xl text-gray-900">
                "Hello great company"
              </p>
            </blockquote>
            <div>
              <p className="text-xl lg:text-2xl font-medium p-4 flex justify-end">
                Sarak
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
