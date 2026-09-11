import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-6rem)] scroll-mt-24 overflow-hidden"
    >
      <Image
        src="/ChowChow.jpg"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-6 py-20 text-white sm:px-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            Healthier &amp; Happier Dogs with Premium Nutrition
          </h1>
          <h2 className="mt-6 text-2xl leading-relaxed sm:text-3xl">
            Discover Nutritious Diets Tailored for Your Furry Friend&apos;s
            Well-being.
          </h2>
          <Link
            href="/book"
            className="mt-8 inline-block rounded-xl bg-primary px-6 py-4 text-xl transition hover:-translate-y-0.5 hover:bg-white hover:text-primary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
