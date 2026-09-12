import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[32rem] scroll-mt-24 overflow-hidden sm:min-h-[40rem] lg:min-h-[calc(100vh-6rem)]"
    >
      <Image
        src="/ChowChow.jpg"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="relative mx-auto flex min-h-[32rem] max-w-7xl flex-col justify-center px-6 py-16 text-white sm:min-h-[40rem] sm:px-10 sm:py-20 lg:min-h-[calc(100vh-6rem)]">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-tight font-semibold [text-shadow:0_2px_16px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            Healthier &amp; Happier Dogs with Premium Nutrition
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] sm:text-2xl">
            Discover Nutritious Diets Tailored for Your Furry Friend&apos;s
            Well-being.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-lg font-semibold text-white transition hover:bg-white hover:text-secondary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
