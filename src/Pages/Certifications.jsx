import React from 'react';

const Certifications = () => {
  return (
    <div className="flex flex-col items-center bg-primary py-4 ">
      <h1 className="text-3xl text-grey py-4">Certifications</h1>
      <div className="flex flex-col items-center md:grid md:grid-cols-2 ">
        <img
          className="w-96 p-2 rounded-xl"
          src="/AdvancedCanineNutritionSpecialist.jpg"
          alt="Advanced Canine Nutrition Specialist Certification"
        />
        <img
          className="w-96 p-2 rounded-xl"
          src="/CanineEssentialOilsSpecialist.jpg"
          alt="Canine Essential Oils Specialist Certification"
        />
        <img
          className="w-96 p-2 rounded-xl"
          src="/HealingSkin.jpeg"
          alt="Healing Skin & Allergies Holistically Certification"
        />
        <img
          className="w-96 p-2 rounded-xl"
          src="/LifeExtendMethod.jpg"
          alt="LifeExtend Method Certification"
        />
        <img
          className="w-96 p-2 rounded-xl"
          src="/PetFoodNutritionSpecialist.jpg"
          alt="Pet Food Nutrition Specialist Certification"
        />
        <img
          className="w-96 p-2 rounded-xl"
          src="/RawDogFoodNutritionSpecialist.jpg"
          alt="Raw Dog Food Nutrition Specialist Certification"
        />
      </div>
    </div>
  );
};

export default Certifications;
