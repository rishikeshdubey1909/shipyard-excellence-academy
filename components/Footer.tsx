import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <Logo showText={true} size="sm" className="white" />
            </div>
            <p className="text-gray-300 text-sm mt-2">
              Specialized training in shipyard repair and shipbuilding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/training-programs" className="text-gray-300 hover:text-white transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/consultancy" className="text-gray-300 hover:text-white transition-colors">
                  Consultancy & Trade Testing
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <a
                  href="mailto:mohan@shipyardexcellenceacademy.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  mohan@shipyardexcellenceacademy.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <a
                  href="tel:+916374510399"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 6374510399
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400" />
                <a
                  href="tel:+917598769352"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 7598769352
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shipyard Excellence Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
