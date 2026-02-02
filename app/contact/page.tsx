'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react'
import Button from '@/components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    tradeInterested: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', contactNumber: '', tradeInterested: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const trades = [
    'Valves',
    'Pumps',
    'Coolers',
    'Fixed Pitch Propeller',
    'Abrasive Grinding',
    'Basic Steel Work',
    'Basic Welding',
    'Scaffold Erect & Dismantle',
    'Slinger/Signaler',
    'Manual Handling',
    'Industrial Counterbalance Lift Truck',
    'Not Sure / General Inquiry',
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Get in touch with us to learn more about our training programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Contact Details</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'mohan@shipyardexcellenceacademy.com',
                href: 'mailto:mohan@shipyardexcellenceacademy.com',
                color: 'text-primary-600',
                bgColor: 'bg-primary-50',
              },
              {
                icon: Phone,
                title: 'Mobile',
                content: '+91 6374510399',
                href: 'tel:+916374510399',
                color: 'text-green-600',
                bgColor: 'bg-green-50',
              },
              {
                icon: Phone,
                title: 'Office',
                content: '+91 7598769352',
                href: 'tel:+917598769352',
                color: 'text-blue-600',
                bgColor: 'bg-blue-50',
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${contact.bgColor} mb-4`}>
                  <contact.icon className={`w-10 h-10 ${contact.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {contact.title}
                </h3>
                <a
                  href={contact.href}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {contact.content}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Enquiry Form */}
      <Section className="bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <MessageSquare className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Enquiry Form</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We've received your enquiry and will get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="tradeInterested" className="block text-sm font-semibold text-gray-700 mb-2">
                    Trade Interested
                  </label>
                  <select
                    id="tradeInterested"
                    name="tradeInterested"
                    value={formData.tradeInterested}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a trade</option>
                    {trades.map((trade) => (
                      <option key={trade} value={trade}>
                        {trade}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your enquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Enquiry
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
