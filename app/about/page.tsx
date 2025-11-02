import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-950 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-yellow-300 transition">
            The Ember Lighting
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link href="/about" className="hover:text-yellow-300 transition font-bold border-b-2 border-yellow-300">About</Link>
            <Link href="/procedures" className="hover:text-yellow-300 transition">Services</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-yellow-500 border-opacity-30">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The Ember Lighting was started in the <strong>Bluffton, SC area</strong> to spread holiday joy with lighting. 
              We are a lighting business that puts up premium light for the best price.
            </p>
            
            <p>
              Started by <strong>two South Carolina football players</strong> trying to brighten up their community, 
              The Ember Lighting brings passion, precision, and a touch of Gamecock spirit to every installation.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-yellow-300">Our Mission</h2>
            <p>
              To transform your home into a magical holiday destination with professional-grade lighting installations 
              that capture the wonder and joy of the season. We believe every home deserves to shine brightly during 
              the holidays.
            </p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4 text-yellow-300">What We Offer</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">🏆</span>
                <span><strong>Premium Quality:</strong> Professional-grade C9 lights and premium fixtures</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">💰</span>
                <span><strong>Best Prices:</strong> Competitive pricing for exceptional value</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">⏰</span>
                <span><strong>Professional Installation:</strong> Expert setup with attention to detail</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">🎁</span>
                <span><strong>Special Packages:</strong> Choose from our curated lighting packages</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">📍</span>
                <span><strong>Local Focus:</strong> Serving Bluffton and Hilton Head Island</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/contact" 
            className="inline-block bg-yellow-500 text-red-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-30 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">The Ember Lighting</p>
          <p className="text-gray-400 mb-2">1 Masters Court, Hilton Head Island, SC 29928</p>
          <p className="text-gray-400 mb-2">
            <a href="mailto:theemberlighting@gmail.com" className="hover:text-yellow-300">theemberlighting@gmail.com</a>
          </p>
          <p className="text-gray-400">(513) 460-4244</p>
        </div>
      </footer>
    </div>
  )
}

