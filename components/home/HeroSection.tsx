'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { Waves } from 'lucide-react'
import Logo from '@/components/Logo'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-navy-50 overflow-hidden pt-20">
      {/* Background decorative elements - Simplified for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-navy-100 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Academy Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-6">
            Shipyard Excellence Academy
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Where the young minds learn the art of Shipyard Skills
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Shipyard Excellence Academy is a theoretical and practical training institute that prepares youth for real shipyard jobs such as{' '}
            <span className="font-semibold text-navy-800">Mechanical Department</span> – Valves, Coolers, Pumps, Fixed Pitch Propeller,{' '}
            <span className="font-semibold text-navy-800">Steel Department</span> – Abrasive Grinding, Basic Steel Work, Basic Welding, and{' '}
            <span className="font-semibold text-navy-800">Supporting Department</span> – Scaffold Erect and Dismantle, Slinger/Signaler, Manual Handling, and Industrial Counterbalance Lift Truck.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contact" variant="primary" className="min-w-[200px]">
              Enquire Now
            </Button>
            <Button href="/training-programs" variant="outline" className="min-w-[200px]">
              View Training Programs
            </Button>
          </div>
        </motion.div>

        {/* Logo */}
        <div className="mt-16 flex justify-center">
          <Logo showText={false} size="lg" />
        </div>
      </div>
    </section>
  )
}
