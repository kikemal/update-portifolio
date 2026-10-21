import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-inner">
        <Image
          className="hero-photo reveal"
          src="/images/portrait.jpg"
          alt="Kidist Kemal"
          width={140}
          height={140}
          unoptimized
          priority
        />
        <h1 id="hero-title" className="reveal delay-1">
          Kidist Kemal
        </h1>
        <p className="hero-role reveal delay-2">Full-Stack Developer</p>
        <p className="hero-stack reveal delay-3">
          React • Next.js • Flutter • AI Enthusiast
        </p>
        <p className="hero-tagline reveal delay-4">
          Turning Ideas into Scalable Digital Products
        </p>
      </div>
    </section>
  );
}
