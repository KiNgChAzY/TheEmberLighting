import Link from 'next/link'
import { getAllProcedures, type ProcedureCode } from '@/lib/procedures'

export default function Procedures() {
  const procedures = getAllProcedures()
  
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
            <Link href="/procedures" className="hover:text-yellow-300 transition font-bold border-b-2 border-yellow-300">Services</Link>
            <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Procedure Code Documentation</h1>
          <p className="text-xl text-gray-300">
            Detailed explanations of our service packages and procedures
          </p>
        </div>

        <div className="space-y-8">
          {procedures.map((procedure) => (
            <ProcedureCard key={procedure.code} procedure={procedure} />
          ))}
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

function ProcedureCard({ procedure }: { procedure: ProcedureCode }) {
  const intensityColors: Record<string, string> = {
    Low: 'text-green-400',
    Medium: 'text-yellow-400',
    High: 'text-orange-400'
  }
  
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 border border-yellow-500 border-opacity-30">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-yellow-300 text-xl font-mono font-bold">{procedure.code}</span>
          <div className="flex items-center gap-4">
            <span className={`text-sm font-semibold ${intensityColors[procedure.laborIntensity]}`}>
              {procedure.laborIntensity} Intensity
            </span>
            <span className="text-sm text-gray-300">⏱️ {procedure.estimatedTime}</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-2">{procedure.title}</h2>
        <p className="text-gray-300 italic text-lg">{procedure.description}</p>
      </div>
      
      <div className="border-t border-gray-600 pt-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-300">Included Services:</h3>
        <ul className="space-y-3">
          {procedure.details.map((detail: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">✓</span>
              <span className="text-gray-200">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

