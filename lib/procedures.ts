// Procedure Code Documentation System for The Ember Lighting
// This file contains detailed explanations of all procedure codes used in our service packages

export interface ProcedureCode {
  code: string
  title: string
  description: string
  details: string[]
  estimatedTime: string
  laborIntensity: 'Low' | 'Medium' | 'High'
}

export const procedureCodes: ProcedureCode[] = [
  {
    code: 'EMB-001',
    title: 'The Magical Glow',
    description: 'Our most sought-after package, bringing true magic to your home with comprehensive exterior lighting.',
    details: [
      'Up to 175 feet of premium C9 LED lights professionally installed on all gutters and roof peaks',
      'Accent lighting on 2 bushes or small trees using net lights or wrap technique',
      'Dusk-to-dawn timer included for automatic operation',
      'Professional cable management and installation',
      'Safety inspection included',
      'Special Gift: Official UofSC football for first five bookings'
    ],
    estimatedTime: '4-6 hours',
    laborIntensity: 'Medium'
  },
  {
    code: 'EMB-002',
    title: 'The Enchanted Estate',
    description: 'The ultimate, breathtaking display for the pinnacle of holiday cheer with maximum coverage.',
    details: [
      'Comprehensive C9 LED lighting on all gutters, peaks, and architectural features',
      'Canopy wrap on 1 large front tree using commercial-grade techniques',
      'Accent lighting on all front shrubs with professional spacing',
      'Professional wreath hanging with secure mounting',
      'Dusk-to-dawn timer with surge protection',
      'Enhanced cable management and weatherproofing',
      'Final walkthrough and adjustment included',
      'Special Gift: Signed football and UofSC Gamecock gloves for first five bookings'
    ],
    estimatedTime: '8-10 hours',
    laborIntensity: 'High'
  }
]

// Service Categories for additional procedure codes
export const serviceCategories = {
  installation: 'Professional installation of holiday lighting fixtures',
  maintenance: 'Routine maintenance and repair services',
  removal: 'Safe removal and storage of lighting equipment',
  custom: 'Custom design and installation for unique properties'
}

// Get procedure code by code number
export function getProcedureByCode(code: string): ProcedureCode | undefined {
  return procedureCodes.find(proc => proc.code === code)
}

// Get all procedure codes
export function getAllProcedures(): ProcedureCode[] {
  return procedureCodes
}

