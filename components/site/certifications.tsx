import Image from "next/image";

const certifications = [
  ["AdvancedCanineNutritionSpecialist.jpg", "Advanced Canine Nutrition Specialist Certification", 640, 497],
  ["CanineEssentialOilsSpecialist.jpg", "Canine Essential Oils Specialist Certification", 769, 596],
  ["HealingSkin.jpeg", "Healing Skin & Allergies Holistically Certification", 640, 468],
  ["LifeExtendMethod.jpg", "LifeExtend Method Certification", 640, 459],
  ["PetFoodNutritionSpecialist.jpg", "Pet Food Nutrition Specialist Certification", 728, 561],
  ["RawDogFoodNutritionSpecialist.jpg", "Raw Dog Food Nutrition Specialist Certification", 796, 619],
] as const;

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 bg-primary px-6 py-16"
    >
      <h1 className="text-center text-3xl text-grey">Certifications</h1>
      <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
        {certifications.map(([src, alt, width, height]) => (
          <Image
            key={src}
            src={`/${src}`}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}
