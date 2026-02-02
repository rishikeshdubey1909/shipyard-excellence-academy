'use client'

import Section from '@/components/Section'
import { motion } from 'framer-motion'
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

const programs = [
  { 
    id: 'valves',
    name: 'Valves', 
    icon: Cog, 
    department: 'Mechanical Department',
    description: 'Comprehensive training on valve operation, maintenance, and repair in shipyard environments.'
  },
  { 
    id: 'pumps',
    name: 'Pumps', 
    icon: Droplets, 
    department: 'Mechanical Department',
    description: 'Hands-on training with various pump types used in shipyard operations and maintenance.'
  },
  { 
    id: 'coolers',
    name: 'Coolers', 
    icon: Wind, 
    department: 'Mechanical Department',
    description: 'Learn the installation, maintenance, and troubleshooting of cooling systems.'
  },
  { 
    id: 'propeller',
    name: 'Fixed Pitch Propeller', 
    icon: Ship, 
    department: 'Mechanical Department',
    description: 'Specialized training in propeller systems, installation, and maintenance procedures.'
  },
  { 
    id: 'grinding',
    name: 'Abrasive Grinding', 
    icon: Sparkles, 
    department: 'Steel Department',
    description: 'Master the techniques of abrasive grinding for shipyard steel work applications.'
  },
  { 
    id: 'steel',
    name: 'Basic Steel Work', 
    icon: Wrench, 
    department: 'Steel Department',
    description: 'Fundamental steel fabrication and construction skills for shipyard projects.'
  },
  { 
    id: 'welding',
    name: 'Basic Welding', 
    icon: Flame, 
    department: 'Steel Department',
    description: 'Essential welding techniques and safety practices for shipyard steel work.'
  },
  { 
    id: 'scaffold',
    name: 'Scaffold Erect & Dismantle', 
    icon: Layers, 
    department: 'Supporting Department',
    description: 'Safe and efficient scaffold erection and dismantling procedures.'
  },
  { 
    id: 'slinger',
    name: 'Slinger/Signaler', 
    icon: Hand, 
    department: 'Supporting Department',
    description: 'Critical communication and signaling skills for crane operations.'
  },
  { 
    id: 'manual',
    name: 'Manual Handling', 
    icon: Package, 
    department: 'Supporting Department',
    description: 'Proper techniques for safe manual handling of materials and equipment.'
  },
  { 
    id: 'lift-truck',
    name: 'Industrial Counterbalance Lift Truck', 
    icon: Package, 
    department: 'Supporting Department',
    description: 'Operational training for industrial lift trucks used in shipyard logistics.'
  },
]

const departments = [
  { name: 'Mechanical Department', color: 'bg-blue-100 text-blue-800' },
  { name: 'Steel Department', color: 'bg-orange-100 text-orange-800' },
  { name: 'Supporting Department', color: 'bg-green-100 text-green-800' },
]

export default function TrainingProgramsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Training Programs</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Industry-relevant programs designed based on shipyard requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            Our training programs are designed based on shipyard requirements. Each course focuses on practical skills, safety procedures, and real job responsibilities.
          </motion.p>
        </div>
      </Section>

      {/* Program List */}
      <Section className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Available Programs</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => {
              const department = departments.find(d => 
                program.department.includes(d.name.split(' ')[0])
              ) || departments[2]
              
              return (
                <motion.div
                  key={program.id}
                  id={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg ${department.color} mb-4`}>
                        <program.icon className="w-8 h-8" />
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${department.color}`}>
                        {program.department.split(' ')[0]}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {program.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {program.description}
                    </p>

                    <Link
                      href={`/training-programs/${program.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group/link"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
              Ready to Start Your Training?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us to learn more about our programs and enrollment process
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
