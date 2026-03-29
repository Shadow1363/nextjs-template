"use client"

import { useState } from 'react'

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '2',
    name: '',
    email: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="reservations" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black mb-4">
            Reservations
          </h2>
          <div className="w-12 h-1 bg-black mx-auto"></div>
          <p className="mt-6 text-zinc-600 max-w-xl mx-auto">
            Experience the minimalist fusion journey. Book your table below.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-zinc-50 p-12 text-center border border-zinc-100 animate-in fade-in">
            <h3 className="text-2xl font-bold mb-4 uppercase">Request Received</h3>
            <p className="text-zinc-600">
              Thank you, {formData.name}. We look forward to hosting your party of {formData.partySize} on {formData.date} at {formData.time}. A confirmation email has been sent to {formData.email}.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-sm uppercase tracking-widest font-semibold border-b border-black pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors"
            >
              Make another reservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-semibold uppercase tracking-widest text-black">Date</label>
              <input 
                type="date" 
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-semibold uppercase tracking-widest text-black">Time</label>
              <input 
                type="time" 
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="partySize" className="text-sm font-semibold uppercase tracking-widest text-black">Party Size</label>
              <select 
                id="partySize"
                name="partySize"
                value={formData.partySize}
                onChange={handleChange}
                className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors appearance-none"
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold uppercase tracking-widest text-black">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-zinc-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold uppercase tracking-widest text-black">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-zinc-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors placeholder:text-zinc-300"
              />
            </div>

            <div className="md:col-span-2 pt-6">
              <button 
                type="submit"
                className="w-full bg-black text-white py-4 text-sm font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-black outline-none"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
