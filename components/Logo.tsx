import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-10',
    md: 'w-24 h-16',
    lg: 'w-32 h-20',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  }

  const isWhite = className.includes('text-white') || className.includes('white')

  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <Image
          src="/images/logo.svg"
          alt="Shipyard Excellence Academy Logo"
          fill
          className="object-contain group-hover:opacity-90 transition-opacity"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${isWhite ? 'text-white' : 'text-navy-900'} ${textSizes[size]} leading-tight`}>
            SHIPYARD EXCELLENCE ACADEMY
          </span>
          {size !== 'sm' && (
            <span className={`text-xs ${isWhite ? 'text-gray-300' : 'text-gray-600'} italic`}>
              Where Young Minds Learn the Art of Shipyard Skills
            </span>
          )}
        </div>
      )}
    </Link>
  )
}
