import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <Image
                src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20modern%20chef%20plating%20minimalist%20fusion%20cuisine%2C%20black%20and%20white%20photography%2C%20elegant&image_size=portrait_4_3"
                alt="Chef plating a dish"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black">
              Our Philosophy
            </h2>
            <div className="w-12 h-1 bg-black"></div>
            <p className="text-lg text-zinc-600 leading-relaxed">
              At Lumina, we believe that complexity is best expressed through simplicity. 
              Our culinary journey bridges the rich heritage of Eastern flavors with 
              Western contemporary techniques, stripped down to their absolute essence.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Chef Elena Rostova curates each plate as a minimalist canvas, where every 
              ingredient serves a distinct purpose. No superfluous garnishes—only pure, 
              unadulterated taste that speaks to the soul.
            </p>
            <div className="pt-4">
              <p className="font-serif text-2xl italic text-black">
                &quot;Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.&quot;
              </p>
              <p className="text-sm uppercase tracking-widest text-zinc-500 mt-4">
                — Chef Elena Rostova
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
