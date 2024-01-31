import React from 'react';

const Reviews = () => {
  return (
    <div>
      <h1 className="text-3xl p-4">Reviews</h1>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="bg-secondary text-grey rounded-lg text-light w-4/5 h-fit lg:w-1/4 items-center my-2 shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 lg:hover:scale-105 mx-auto">
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
        <div className="bg-secondary text-grey rounded-lg text-light w-4/5 h-fit lg:w-1/4 items-center my-2 shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 lg:hover:scale-105 mx-auto">
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
        <div className="bg-secondary text-grey rounded-lg text-light w-4/5 h-fit lg:w-1/4 items-center my-2 shadow-xl lg:transition lg:ease-in-out lg:hover:-translate-y-0.5 lg:hover:scale-105 mx-auto">
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
