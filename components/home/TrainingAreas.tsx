import Section from '@/components/Section'
import Link from 'next/link'
import { 
  Cog, 
  Droplets, 
  Wind, 
  Ship, 
  Sparkles, 
  Wrench, 
  Flame, 
  Layers, 
  Hand, 
  Package,
  ArrowRight 
} from 'lucide-react'

const trainingAreas = [
  { name: 'Valve Training', icon: Cog, href: '/training-programs#valves' },
  { name: 'Pump Training', icon: Droplets, href: '/training-programs#pumps' },
  { name: 'Cooler Training', icon: Wind, href: '/training-programs#coolers' },
  { name: 'Fixed Pitch Propeller Training', icon: Ship, href: '/training-programs#propeller' },
  { name: 'Abrasive Grinding Training', icon: Sparkles, href: '/training-programs#grinding' },
  { name: 'Basic Steel Work Training', icon: Wrench, href: '/training-programs#steel' },
  { name: 'Basic Welding Training', icon: Flame, href: '/training-programs#welding' },
  { name: 'Scaffold Erect & Dismantle Training', icon: Layers, href: '/training-programs#scaffold' },
  { name: 'Slinger/Signaler Training', icon: Hand, href: '/training-programs#slinger' },
  { name: 'Manual Handling Training', icon: Package, href: '/training-programs#manual' },
  { name: 'Industrial Counterbalance Lift Truck Training', icon: Package, href: '/training-programs#lift-truck' },
]

export default function TrainingAreas() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
          Training Areas
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive training programs covering all essential shipyard skills
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingAreas.map((area) => (
          <div key={area.name} className="group">
            <Link
              href={area.href}
              className="block bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <area.icon className="w-10 h-10 text-primary-600 group-hover:text-primary-700 transition-colors" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-all group-hover:translate-x-1" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 group-hover:text-primary-700 transition-colors">
                {area.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/training-programs"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
        >
          View All Training Programs
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Section>
  )
}
