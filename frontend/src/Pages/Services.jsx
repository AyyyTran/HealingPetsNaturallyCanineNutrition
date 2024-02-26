import React from 'react';

const Services = () => {
  return (
    <div className="w-3/4 mx-auto py-4 services">
      <h1 className="text-3xl p-4">Services</h1>
      <div className="bg-primary rounded-2xl md:text-xl  text-grey p-4">
        <div>
          I provide guidance on the right path for food and supplements to
          manage and in some cases, prevent these health issues.
        </div>
        <div className="grid grid-cols-2 text-sm md:text-lg p-4 font-semibold">
          <ul>
            <li>Allergies</li>
            <li>Yeast Issues</li>
            <li>Kidney Disease</li>
            <li>Digestive Issues</li>
            <li>Liver Disease</li>
            <li>Obesity</li>
            <li>Seizures</li>
          </ul>
          <ul>
            <li>IVDD (Intervertebral Disc Disease)</li>
            <li>Urinary/Bladder Crystals/Stones</li>
            <li>Pancreatitis</li>
            <li>Cancer-Support</li>
            <li>Joint Issues</li>
          </ul>
        </div>
        <p>And many more...</p>
      </div>
    </div>
  );
};

export default Services;
