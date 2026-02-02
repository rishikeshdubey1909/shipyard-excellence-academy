'use client'

import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { 
  Globe, 
  MapPin, 
  TrendingUp, 
  Award,
  Briefcase,
  Users,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'

export default function CareersPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Careers & Industry Support
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Building pathways to successful shipyard careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Opportunities */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Career Opportunities
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Domestic Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-navy-900">
                  Shipyard and Shipbuilding Careers in India
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diverse opportunities across domestic shipyards and marine industries, supporting the nation's growing maritime sector. Our training prepares you for immediate employment in:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Major shipyards across India</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Marine construction companies</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ship repair and maintenance facilities</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Port and harbor operations</span>
                </li>
              </ul>
            </motion.div>

            {/* Global Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Globe className="w-12 h-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-navy-900">
                  Global Shipyard Employment
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Overseas placements in leading shipyards across the Middle East, Singapore, and Europe, offering international exposure and career advancement. Opportunities include:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Middle East shipyards (UAE, Saudi Arabia, Qatar)</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Singapore marine industry</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>European shipbuilding facilities</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>International maritime projects</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skill Growth */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Skill Growth & Development
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Entry-Level to Skilled',
                description: 'Start from basics and progress to become a competent technician with industry-recognized skills.',
              },
              {
                icon: TrendingUp,
                title: 'Competent Technician',
                description: 'Develop expertise in your chosen trade with hands-on training and real-world experience.',
              },
              {
                icon: Award,
                title: 'Upgrade Opportunities',
                description: 'Continuous learning paths to advance your career and take on more challenging roles.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Industry Support */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Users className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Industry Support
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed text-center mb-12"
          >
            Our academy maintains strong connections with shipyards and marine industries both domestically and internationally. We provide placement support and career guidance to help our graduates find the right opportunities that match their skills and aspirations.
          </motion.p>
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
              Start Your Shipyard Career Today
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join our training programs and unlock opportunities in the shipyard industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/training-programs" variant="secondary" className="bg-white text-primary-600 hover:bg-primary-50">
                View Training Programs
              </Button>
              <Button href="/contact" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
