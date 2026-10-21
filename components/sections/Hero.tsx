import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-inner">
        <Image
          className="hero-photo"
          src="/images/portrait.jpg"
          alt="Kidist Kemal"
          width={140}
          height={140}
          unoptimized
          priority
        />
        <h1 id="hero-title">Kidist Kemal</h1>
        <p className="hero-role">Full-Stack Developer</p>
        <p className="hero-stack">React • Next.js • Flutter • AI Enthusiast</p>
        <p className="hero-tagline">Turning Ideas into Scalable Digital Products</p>
      </div>
    </section>
  );
}
