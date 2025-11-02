import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-950 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">The Ember Lighting</div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
            <Link href="/procedures" className="hover:text-yellow-300 transition">Services</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Brighten Your Holidays
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium Lighting Services in Bluffton, SC
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-300">
            Started by two South Carolina football players trying to brighten up their community
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-yellow-500 text-red-900 px-8 py-4 rounded-lg font-bold text-xl hover:bg-yellow-400 transition shadow-lg"
          >
            Get Started Today
          </Link>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ServiceCard 
            code="EMB-001"
            title="The Magical Glow"
            description="Our most sought-after package, bringing true magic to your home."
            features={[
              "Up to 175' of C9 lights on all gutters and peaks",
              "Accent lighting on 2 bushes or small trees",
              "Dusk-to-dawn timer included",
              "Special Gift: Official UofSC football for first five bookings"
            ]}
          />
          
          <ServiceCard 
            code="EMB-002"
            title="The Enchanted Estate"
            description="The ultimate, breathtaking display for the pinnacle of holiday cheer."
            features={[
              "Comprehensive lighting on all gutters, peaks, and architectural features",
              "Canopy wrap on 1 large front tree",
              "Accent lighting on all front shrubs",
              "Professional wreath hanging",
              "Special Gift: Signed football and UofSC Gamecock gloves"
            ]}
          />
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

function ServiceCard({ code, title, description, features }: {
  code: string
  title: string
  description: string
  features: string[]
}) {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-yellow-500 border-opacity-30 hover:bg-opacity-20 transition">
      <div className="mb-4">
        <span className="text-yellow-300 text-sm font-mono">{code}</span>
        <h3 className="text-2xl font-bold mt-2">{title}</h3>
        <p className="text-gray-300 italic mt-2">{description}</p>
      </div>
      <ul className="space-y-2 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-yellow-300 mr-2">✨</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

