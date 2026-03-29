import Link from 'next/link'

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter uppercase mb-4">Lumina</h2>
            <p className="text-zinc-400 max-w-sm mb-6">
              A minimalist fusion experience. Where culinary traditions meet modern simplicity in every dish.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-zinc-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#reservations" className="text-zinc-400 hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-zinc-400 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-zinc-300">Contact</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>123 Culinary Ave,</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">hello@luminarestaurant.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Lumina Restaurant. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
