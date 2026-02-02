import Section from '@/components/Section'
import { FileCheck, Users, Building2, ClipboardCheck } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'

export default function ConsultancySection() {
  return (
    <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Consultancy & Trade Testing
        </h2>
        <div className="w-24 h-1 bg-primary-400 mx-auto mb-8"></div>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center mb-12">
          We provide space and support for consultancy firms and manpower agencies to conduct trade tests and skill assessments for shipyard workers.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Users,
              title: 'Manpower Consultancies',
              description: 'Professional testing facilities for your candidates',
            },
            {
              icon: Building2,
              title: 'Shipyards',
              description: 'Skill assessment for your workforce needs',
            },
            {
              icon: ClipboardCheck,
              title: 'Contractors',
              description: 'Reliable evaluation and documentation services',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <item.icon className="w-10 h-10 text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/consultancy" variant="secondary" className="bg-primary-600 hover:bg-primary-700">
            Learn More About Our Services
          </Button>
        </div>
      </div>
    </Section>
  )
}
