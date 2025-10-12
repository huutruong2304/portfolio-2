import AppContainer from '@/components/layout/app-container'
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/app-header'
import IntroductionSection from './_components/introduction-section'
import AboutSection from './_components/about-section'
import ServiceSection from './_components/service-section'
import ProjectSection from './_components/project-section'
import TestimonialSection from './_components/testimonial-section'
import ContactSection from './_components/contact-section'
import { FadeIn } from '@/components/motion/fade-in'
import { SlideUp } from '@/components/motion/slide-up'

export default async function Home() {
  return (
    <div>
      <AppHeader />
      <AppContainer>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* introduce */}
          <FadeIn>
            <IntroductionSection />
          </FadeIn>
          {/* about me */}
          <SlideUp>
            <AboutSection />
          </SlideUp>
          {/* services */}
          <SlideUp>
            <ServiceSection />
          </SlideUp>
          {/* projects */}
          <SlideUp>
            <ProjectSection />
          </SlideUp>
          {/* testimonials */}
          <SlideUp>
            <TestimonialSection />
          </SlideUp>
          {/* contact */}
          <SlideUp>
            <ContactSection />
          </SlideUp>
        </main>
      </AppContainer>
      <AppFooter />
    </div>
  )
}
