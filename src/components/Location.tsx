export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black mb-4">
            Location
          </h2>
          <div className="w-12 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[400px] w-full bg-zinc-200 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540700767!2d-73.98782392426466!3d40.74844047138981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1714065543302!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lumina Restaurant Location"
            ></iframe>
          </div>

          <div className="order-1 lg:order-2 space-y-12 lg:pl-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">Address</h3>
              <p className="text-2xl font-light text-black">
                123 Culinary Ave,<br />
                New York, NY 10001
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">Hours</h3>
              <div className="space-y-2 text-lg font-light text-black">
                <p className="flex justify-between max-w-xs border-b border-zinc-200 pb-2">
                  <span>Mon - Thu</span>
                  <span>5:00 PM - 10:00 PM</span>
                </p>
                <p className="flex justify-between max-w-xs border-b border-zinc-200 pb-2">
                  <span>Fri - Sat</span>
                  <span>5:00 PM - 11:00 PM</span>
                </p>
                <p className="flex justify-between max-w-xs pb-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">Contact</h3>
              <div className="space-y-2 text-lg font-light text-black">
                <p>hello@luminarestaurant.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
