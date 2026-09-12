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
    <section id="certifications" className="scroll-mt-24 px-6 py-16 sm:py-20">
      <h2 className="text-center text-3xl font-semibold text-darkblue sm:text-4xl">
        Certifications
      </h2>
      <div className="mx-auto mt-8 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
        {certifications.map(([src, alt, width, height]) => (
          <figure
            key={src}
            className="min-w-[80%] snap-center sm:min-w-[55%] md:min-w-0"
          >
            <Image
              src={`/${src}`}
              alt={alt}
              width={width}
              height={height}
              className="h-auto w-full rounded-2xl bg-white object-contain shadow-sm ring-1 ring-darkblue/10"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
