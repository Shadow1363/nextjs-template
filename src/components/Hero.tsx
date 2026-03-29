import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimalist%20fusion%20restaurant%20interior%2C%20elegant%2C%20monochromatic%2C%20high%20contrast%2C%20clean%20lines&image_size=landscape_16_9"
          alt="Lumina restaurant interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Lumina
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-wide mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Where East meets West in minimalist harmony.
        </p>
        <Link 
          href="#reservations"
          className="inline-block bg-white text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-colors animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300"
        >
          Book a Table
        </Link>
      </div>
    </section>
  )
}
