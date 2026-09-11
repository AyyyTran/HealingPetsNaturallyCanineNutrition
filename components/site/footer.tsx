import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 px-6 py-6 sm:flex-row sm:gap-16">
        <Link href="/" aria-label="Healing Pets Naturally home">
          <Image
            src="/logo-transparent.svg"
            alt="Logo"
            width={176}
            height={112}
            className="h-24 w-auto"
          />
        </Link>
        <a
          href="mailto:info@healingpetsnutrition.com"
          className="font-medium underline-offset-4 hover:underline"
        >
          info@healingpetsnutrition.com
        </a>
      </div>
      <div className="px-4 pb-6 text-center text-xs">
        Copyright © {new Date().getFullYear()}{" "}
        HealingPetsNaturallyCanineNutrition. All rights reserved.
      </div>
    </footer>
  );
}
