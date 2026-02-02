import Section from '@/components/Section'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/Button'

export default function ContactSummary() {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-600">
          Have questions? We're here to help you get started on your shipyard career journey.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: 'Email',
              content: 'mohan@shipyardexcellenceacademy.com',
              href: 'mailto:mohan@shipyardexcellenceacademy.com',
              color: 'text-primary-600',
            },
            {
              icon: Phone,
              title: 'Mobile',
              content: '+91 6374510399',
              href: 'tel:+916374510399',
              color: 'text-green-600',
            },
            {
              icon: Phone,
              title: 'Office',
              content: '+91 7598769352',
              href: 'tel:+917598769352',
              color: 'text-blue-600',
            },
          ].map((contact) => (
            <div key={contact.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-50 to-primary-100 mb-4">
                <contact.icon className={`w-8 h-8 ${contact.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">
                {contact.title}
              </h3>
              <a
                href={contact.href}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {contact.content}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/contact" variant="primary">
            Send Us a Message
          </Button>
        </div>
      </div>
    </Section>
  )
}
