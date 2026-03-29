"use client"

import { useState } from 'react'

type MenuItem = {
  name: string
  description: string
  price: string
}

type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      { name: 'Yuzu Kosho Scallop Crudo', description: 'Thinly sliced Hokkaido scallops, yuzu kosho, daikon, white soy.', price: '$24' },
      { name: 'Wagyu Beef Tartare', description: 'A5 Wagyu, black garlic aioli, cured egg yolk, puffed rice.', price: '$28' },
      { name: 'Miso Glazed Eggplant', description: 'Charred eggplant, sweet saikyo miso, sesame, chives.', price: '$18' },
    ]
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      { name: 'Miso Black Cod', description: 'Sustainably sourced black cod, dashi broth, bok choy, pickled ginger.', price: '$42' },
      { name: 'Duck Breast & Plum', description: 'Dry-aged duck, umeboshi plum reduction, smoked parsnip puree.', price: '$46' },
      { name: 'Wild Mushroom Risotto', description: 'Maitake and shiitake, truffle essence, parmesan, nori dust.', price: '$34' },
    ]
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Matcha Panna Cotta', description: 'Ceremonial grade matcha, white chocolate, black sesame crumble.', price: '$16' },
      { name: 'Yuzu Tart', description: 'Yuzu curd, torched meringue, shiso leaf syrup.', price: '$15' },
      { name: 'Black Sesame Ice Cream', description: 'House-churned black sesame, honeycomb, kinako dust.', price: '$14' },
    ]
  }
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('starters')

  return (
    <section id="menu" className="py-24 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black mb-4">
            The Menu
          </h2>
          <div className="w-12 h-1 bg-black mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-8 mb-16 border-b border-zinc-200">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`pb-4 text-sm md:text-base font-semibold uppercase tracking-widest transition-colors relative ${
                activeCategory === category.id ? 'text-black' : 'text-zinc-400 hover:text-zinc-600'
              }`}
              aria-selected={activeCategory === category.id}
              role="tab"
            >
              {category.label}
              {activeCategory === category.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div 
          className="grid gap-12"
          role="tabpanel"
        >
          {menuData.find(c => c.id === activeCategory)?.items.map((item, index) => (
            <div 
              key={item.name} 
              className="group flex flex-col md:flex-row justify-between items-baseline border-b border-zinc-200 pb-6 hover:border-black transition-colors duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:pr-8 mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {item.name}
                </h3>
                <p className="text-zinc-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="text-xl font-medium text-black">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
