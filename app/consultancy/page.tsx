'use client'

import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { 
  FileCheck, 
  Users, 
  Building2, 
  ClipboardCheck,
  Shield,
  Award,
  CheckCircle2,
  Phone
} from 'lucide-react'
import Button from '@/components/Button'

export default function ConsultancyPage() {
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
              Consultancy & Trade Testing
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Professional skill assessment and trade testing facilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trade Testing Facility */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FileCheck className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Trade Testing Facility
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
            We provide a controlled and safe environment for skill testing of shipyard workers. Our facility is equipped with industry-standard tools and equipment to ensure accurate assessment of candidates' capabilities.
          </motion.p>
        </div>
      </Section>

      {/* Who Can Use This Facility */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Who Can Use This Facility
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Manpower Consultancies',
                description: 'Professional testing facilities for your candidates. We provide comprehensive skill assessment services to help you evaluate potential employees.',
              },
              {
                icon: Building2,
                title: 'Shipyards',
                description: 'Skill assessment for your workforce needs. Test and evaluate workers to ensure they meet your specific requirements and standards.',
              },
              {
                icon: ClipboardCheck,
                title: 'Contractors',
                description: 'Reliable evaluation and documentation services. Get accurate assessments with proper documentation for your project needs.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
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

      {/* Services Offered */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Services Offered
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ClipboardCheck,
                title: 'Practical Skill Tests',
                description: 'Hands-on testing using real shipyard tools and equipment',
              },
              {
                icon: Award,
                title: 'Evaluation Support',
                description: 'Expert evaluators to assess candidate performance accurately',
              },
              {
                icon: FileCheck,
                title: 'Documentation',
                description: 'Comprehensive reports and certificates for all assessments',
              },
              {
                icon: Shield,
                title: 'Safety Compliance',
                description: 'All tests conducted following industry safety standards',
              },
              {
                icon: CheckCircle2,
                title: 'Quality Assurance',
                description: 'Rigorous testing procedures ensuring reliable results',
              },
              {
                icon: Phone,
                title: 'Consultation',
                description: 'Expert guidance on testing requirements and procedures',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Our Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to discuss your testing and assessment needs
            </p>
            <Button href="/contact" variant="secondary" className="bg-primary-600 hover:bg-primary-700">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
