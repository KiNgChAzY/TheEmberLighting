import Link from 'next/link'

export default function Contact() {
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
            <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
            <Link href="/procedures" className="hover:text-yellow-300 transition">Services</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition font-bold border-b-2 border-yellow-300">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-yellow-500 border-opacity-30">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-yellow-300">Contact Information</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300 text-sm mb-1">Location</p>
                  <p className="text-lg">
                    1 Masters Court<br />
                    Hilton Head Island, SC 29928
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 text-sm mb-1">Email</p>
                  <a 
                    href="mailto:theemberlighting@gmail.com" 
                    className="text-lg text-yellow-300 hover:text-yellow-200 transition"
                  >
                    theemberlighting@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-300 text-sm mb-1">Phone</p>
                  <a 
                    href="tel:5134604244" 
                    className="text-lg text-yellow-300 hover:text-yellow-200 transition"
                  >
                    (513) 460-4244
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-900 bg-opacity-30 rounded-lg border border-yellow-600">
                <p className="text-sm">
                  <strong>Service Area:</strong> Bluffton, SC and Hilton Head Island<br />
                  <strong>Response Time:</strong> We aim to respond within 24 hours
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-400 focus:border-yellow-300 focus:outline-none text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-400 focus:border-yellow-300 focus:outline-none text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-400 focus:border-yellow-300 focus:outline-none text-white placeholder-gray-400"
                    placeholder="(513) 555-1234"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-400 focus:border-yellow-300 focus:outline-none text-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="magical-glow" className="text-gray-900">The Magical Glow</option>
                    <option value="enchanted-estate" className="text-gray-900">The Enchanted Estate</option>
                    <option value="custom" className="text-gray-900">Custom Quote</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-gray-400 focus:border-yellow-300 focus:outline-none text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your lighting needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-red-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
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

