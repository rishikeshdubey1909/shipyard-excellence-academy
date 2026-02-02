'use client'

import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Shield, 
  Wrench, 
  FileText, 
  GraduationCap,
  Award,
  CheckCircle
} from 'lucide-react'

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Bridging the gap between classroom learning and actual shipyard work
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Shipyard Excellence Academy */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              About Shipyard Excellence Academy
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed mb-8"
          >
            Shipyard Excellence Academy was established to bridge the gap between classroom learning and actual shipyard work. Many workers lack practical exposure and safety awareness. Our academy focuses on hands-on skills that are directly used in shipyards.
          </motion.p>
        </div>
      </Section>

      {/* Why This Academy Is Needed */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Why This Academy Is Needed
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Shipyards require skilled technicians who understand tools, safety, and procedures. Many candidates lack this exposure. Our academy trains candidates in real working conditions to meet industry expectations.
          </motion.p>
        </div>
      </Section>

      {/* Our Training Approach */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Our Training Approach
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'Practical Training Over Theory',
                description: 'Hands-on experience with real tools and equipment used in shipyards',
              },
              {
                icon: Shield,
                title: 'Safety-First Mindset',
                description: 'Comprehensive safety training and awareness programs',
              },
              {
                icon: Target,
                title: 'Real Tools and Equipment',
                description: 'Training with actual shipyard tools and machinery',
              },
              {
                icon: FileText,
                title: 'Step-by-Step Working Methods',
                description: 'Structured learning approach following industry standards',
              },
              {
                icon: Award,
                title: 'Focus on Discipline',
                description: 'Building professional discipline and work ethics',
              },
              {
                icon: CheckCircle,
                title: 'Documentation',
                description: 'Proper documentation and record-keeping practices',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <item.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who Can Join */}
      <Section className="bg-gradient-to-br from-navy-50 to-primary-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Who Can Join
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: 'ITI / Diploma Holders',
                subtitle: 'Engineering Students',
                description: 'Technical education background preferred',
              },
              {
                icon: Target,
                title: 'Job Seekers',
                subtitle: 'Shipyard & Overseas Jobs',
                description: 'Candidates preparing for shipyard or overseas employment',
              },
              {
                icon: Users,
                title: '10th / 12th Dropouts',
                subtitle: 'For Scaffold & Slinger',
                description: 'Opportunities available for specific trades',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <item.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{item.subtitle}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
