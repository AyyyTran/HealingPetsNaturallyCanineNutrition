import React from 'react';

const Disclaimer = () => {
  return (
    <div className="flex-col justify-center items-center py-8">
      <div className="text-2xl font-bold py-2">Medical Disclaimer:</div>
      <div className="text-l text-center mx-auto w-5/6 lg:max-w-4xl">
        The material and information provided is for informational purposes
        only. It is not intended as a practice of veterinary medicine or the
        provision of veterinary medical services. This information is not
        intended for use in the treatment or diagnosis of specific health
        problems or diseases and should never be considered a substitute for
        veterinary care. Each animal is unique and may respond to treatments
        differently. If your pet is in medical distress please seek veterinary
        care immediately.
      </div>
    </div>
  );
};

export default Disclaimer;
