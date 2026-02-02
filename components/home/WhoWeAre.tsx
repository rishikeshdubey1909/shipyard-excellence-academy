import Section from '@/components/Section'
import { Target, Users, Award } from 'lucide-react'

export default function WhoWeAre() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
          Who We Are
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-12">
          Shipyard Excellence Academy provides specialized training in shipyard repair and shipbuilding, ensuring that trainees graduate as competent professionals who can immediately support the nation's shipyard and shipbuilding sector.
        </p>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
          Shipyard Excellence Academy is a skill development and training center focused on shipyard repair and Ship Building. We provide hands-on training based on actual shipyard working methods, safety rules, and industry requirements.
        </p>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Target,
              title: 'Focused Training',
              description: 'Specialized programs designed for shipyard industry needs',
            },
            {
              icon: Users,
              title: 'Expert Instructors',
              description: 'Learn from experienced professionals in the field',
            },
            {
              icon: Award,
              title: 'Industry Ready',
              description: 'Graduate with practical skills and job readiness',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
