import HeroSection from '@/components/home/HeroSection'
import WhoWeAre from '@/components/home/WhoWeAre'
import VisionPurposeImpact from '@/components/home/VisionPurposeImpact'
import TrainingAreas from '@/components/home/TrainingAreas'
import ConsultancySection from '@/components/home/ConsultancySection'
import ContactSummary from '@/components/home/ContactSummary'

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <VisionPurposeImpact />
      <TrainingAreas />
      <ConsultancySection />
      <ContactSummary />
    </>
  )
}
