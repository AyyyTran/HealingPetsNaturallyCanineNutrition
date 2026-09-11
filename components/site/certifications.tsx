import Image from "next/image";

const certifications = [
  ["AdvancedCanineNutritionSpecialist.jpg", "Advanced Canine Nutrition Specialist Certification"],
  ["CanineEssentialOilsSpecialist.jpg", "Canine Essential Oils Specialist Certification"],
  ["HealingSkin.jpeg", "Healing Skin & Allergies Holistically Certification"],
  ["LifeExtendMethod.jpg", "LifeExtend Method Certification"],
  ["PetFoodNutritionSpecialist.jpg", "Pet Food Nutrition Specialist Certification"],
  ["RawDogFoodNutritionSpecialist.jpg", "Raw Dog Food Nutrition Specialist Certification"],
] as const;

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 bg-primary px-6 py-16"
    >
      <h1 className="text-center text-3xl text-grey">Certifications</h1>
      <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
        {certifications.map(([src, alt]) => (
          <Image
            key={src}
            src={`/${src}`}
            alt={alt}
            width={768}
            height={594}
            className="h-auto w-full rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}
