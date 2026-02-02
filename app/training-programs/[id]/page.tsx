'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Button from '@/components/Button'

const programDetails: Record<string, {
  name: string
  department: string
  description: string
  duration?: string
  prerequisites?: string[]
  skills?: string[]
}> = {
  valves: {
    name: 'Valve Training',
    department: 'Mechanical Department',
    description: 'Comprehensive training program covering valve operation, maintenance, repair, and troubleshooting in shipyard environments. Learn to work with various valve types including gate, globe, ball, and butterfly valves.',
    duration: '4-6 weeks',
    prerequisites: ['Basic mechanical knowledge', 'Safety awareness'],
    skills: ['Valve identification', 'Maintenance procedures', 'Troubleshooting', 'Safety protocols'],
  },
  pumps: {
    name: 'Pump Training',
    department: 'Mechanical Department',
    description: 'Hands-on training with various pump types used in shipyard operations. Learn installation, maintenance, and repair of centrifugal, positive displacement, and specialty pumps.',
    duration: '4-6 weeks',
    prerequisites: ['Basic mechanical knowledge', 'Safety awareness'],
    skills: ['Pump operation', 'Installation techniques', 'Maintenance procedures', 'Diagnostic skills'],
  },
  coolers: {
    name: 'Cooler Training',
    department: 'Mechanical Department',
    description: 'Learn the installation, maintenance, and troubleshooting of cooling systems used in shipyard operations. Cover heat exchangers, chillers, and related equipment.',
    duration: '3-5 weeks',
    prerequisites: ['Basic mechanical knowledge'],
    skills: ['System installation', 'Maintenance procedures', 'Troubleshooting', 'Performance optimization'],
  },
  propeller: {
    name: 'Fixed Pitch Propeller Training',
    department: 'Mechanical Department',
    description: 'Specialized training in propeller systems, installation, maintenance, and repair procedures. Learn about propeller dynamics, balancing, and alignment.',
    duration: '6-8 weeks',
    prerequisites: ['Advanced mechanical knowledge', 'Marine systems understanding'],
    skills: ['Propeller installation', 'Maintenance procedures', 'Balancing techniques', 'Alignment procedures'],
  },
  grinding: {
    name: 'Abrasive Grinding Training',
    department: 'Steel Department',
    description: 'Master the techniques of abrasive grinding for shipyard steel work applications. Learn proper tool usage, safety procedures, and surface preparation methods.',
    duration: '2-3 weeks',
    prerequisites: ['Basic steel work knowledge'],
    skills: ['Grinding techniques', 'Tool operation', 'Surface preparation', 'Safety protocols'],
  },
  steel: {
    name: 'Basic Steel Work Training',
    department: 'Steel Department',
    description: 'Fundamental steel fabrication and construction skills for shipyard projects. Learn cutting, shaping, and assembly techniques used in shipyard operations.',
    duration: '6-8 weeks',
    prerequisites: ['Basic technical knowledge'],
    skills: ['Cutting techniques', 'Fabrication methods', 'Assembly procedures', 'Quality control'],
  },
  welding: {
    name: 'Basic Welding Training',
    department: 'Steel Department',
    description: 'Essential welding techniques and safety practices for shipyard steel work. Cover various welding methods including arc, MIG, and TIG welding.',
    duration: '8-10 weeks',
    prerequisites: ['Basic steel work knowledge', 'Safety awareness'],
    skills: ['Welding techniques', 'Joint preparation', 'Quality inspection', 'Safety procedures'],
  },
  scaffold: {
    name: 'Scaffold Erect & Dismantle Training',
    department: 'Supporting Department',
    description: 'Safe and efficient scaffold erection and dismantling procedures. Learn proper assembly, inspection, and safety protocols for scaffold systems.',
    duration: '2-3 weeks',
    prerequisites: ['Physical fitness', 'Height awareness'],
    skills: ['Scaffold assembly', 'Safety procedures', 'Inspection techniques', 'Dismantling methods'],
  },
  slinger: {
    name: 'Slinger/Signaler Training',
    department: 'Supporting Department',
    description: 'Critical communication and signaling skills for crane operations. Learn hand signals, radio communication, and safety procedures for lifting operations.',
    duration: '2-3 weeks',
    prerequisites: ['Good communication skills', 'Safety awareness'],
    skills: ['Hand signals', 'Radio communication', 'Load assessment', 'Safety protocols'],
  },
  manual: {
    name: 'Manual Handling Training',
    department: 'Supporting Department',
    description: 'Proper techniques for safe manual handling of materials and equipment. Learn ergonomic principles, lifting techniques, and injury prevention.',
    duration: '1-2 weeks',
    prerequisites: ['Physical fitness'],
    skills: ['Lifting techniques', 'Ergonomic principles', 'Injury prevention', 'Equipment handling'],
  },
  'lift-truck': {
    name: 'Industrial Counterbalance Lift Truck Training',
    department: 'Supporting Department',
    description: 'Operational training for industrial lift trucks used in shipyard logistics. Learn safe operation, maintenance, and load handling procedures.',
    duration: '2-3 weeks',
    prerequisites: ['Valid driving license', 'Safety awareness'],
    skills: ['Vehicle operation', 'Load handling', 'Safety procedures', 'Maintenance basics'],
  },
}

export default function TrainingProgramPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const program = programDetails[id]

  if (!program) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/training-programs"
              className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Training Programs
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{program.name}</h1>
            <p className="text-xl text-primary-100">{program.department}</p>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Program Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {program.description}
            </p>

            {program.duration && (
              <div className="bg-primary-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Duration</h3>
                <p className="text-gray-700">{program.duration}</p>
              </div>
            )}

            {program.prerequisites && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Prerequisites</h3>
                <ul className="space-y-2">
                  {program.prerequisites.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {program.skills && (
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Skills You'll Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.skills.map((skill, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-primary-600 mr-3">✓</span>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-navy-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in This Program?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us to learn more about enrollment and course schedules
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                Enquire Now
              </Button>
              <Button href="/training-programs" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                View Other Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
