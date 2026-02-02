import Section from '@/components/Section'
import { Eye, Target, TrendingUp } from 'lucide-react'

export default function VisionPurposeImpact() {
  return (
    <Section className="bg-gradient-to-br from-navy-50 to-primary-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
          Vision, Purpose & Impact
        </h2>
        <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Vision */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <Eye className="w-10 h-10 text-primary-600 mr-3" />
            <h3 className="text-2xl font-bold text-navy-900">Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To train and empower youth with shipyard skills, create stable careers, and support shipyard industry requirements.
          </p>
        </div>

        {/* Purpose */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <Target className="w-10 h-10 text-primary-600 mr-3" />
            <h3 className="text-2xl font-bold text-navy-900">Purpose</h3>
          </div>
          <ul className="text-gray-700 leading-relaxed space-y-3">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Deliver industry-relevant, hands-on shipyard training that equips students with practical skills and job readiness.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Facilitate global career pathways by opening opportunities in marine and shipyard trades through structured training and placement initiatives.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Provide a steady pipeline of skilled professionals to meet the evolving manpower needs of shipyards and the wider maritime industry.</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>To act as a trade testing and skill assessment center.</span>
            </li>
          </ul>
        </div>

        {/* Impact */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-10 h-10 text-primary-600 mr-3" />
            <h3 className="text-2xl font-bold text-navy-900">Impact</h3>
          </div>
          <ul className="text-gray-700 leading-relaxed space-y-3">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Better employment for youth</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Improved productivity in shipyards</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>Ensure a continuous pipeline of highly skilled and competent professionals to support shipyards and the shipbuilding industry</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
