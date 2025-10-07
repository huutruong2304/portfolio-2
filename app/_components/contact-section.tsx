import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

// type Props = {}

const ContactSection = () => {
  return (
    <AppSection id="contact">
      <div className="w-full md:w-2/3 mx-auto mb-20 md:mb-32">
        <SectionTitle name={"Let's work together"} className="text-center" />
        <SectionDescription
          content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi`}
        />
        <div className="flex space-x-3 mt-10">
          <Input type="email" placeholder="Enter your email" className="h-12" />
          <Button className="font-bold h-12">Contact me</Button>
        </div>
      </div>
    </AppSection>
  )
}

export default ContactSection
