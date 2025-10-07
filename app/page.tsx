import AppContainer from '@/components/layout/app-container'
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/app-header'
import IntroductionSection from './_components/introduction-section'
import AboutSection from './_components/about-section'
import ServiceSection from './_components/service-section'
import ProjectSection from './_components/project-section'
import TestimonialSection from './_components/testimonial-section'
import ContactSection from './_components/contact-section'

export default async function Home() {
  return (
    <div>
      <AppHeader />
      <AppContainer>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* introduce */}
          <IntroductionSection />
          {/* about me */}
          <AboutSection />
          {/* services */}
          <ServiceSection />
          {/* projects */}
          <ProjectSection />
          {/* testimonials */}
          <TestimonialSection />
          {/* contact */}
          <ContactSection />
        </main>
      </AppContainer>
      <AppFooter />
    </div>
  )
}
