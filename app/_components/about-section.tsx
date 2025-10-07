import React from 'react'
import ProgressSkill from '@/components/custom/progress-skill'
import TwoColSection from '@/components/layout/two-col-section'
import AvatarProfile from '@/components/custom/avatar-profile'
import SectionTitle from '@/components/custom/section-title'
import SectionDescription from '@/components/custom/section-description'

const AboutSection = () => {
  return (
    <TwoColSection id="about">
      <div className="flex justify-center md:justify-start items-center">
        <AvatarProfile src="/images/user/avatar.png" alt="truong-nguyen-avatar" />
      </div>
      <div>
        <SectionTitle name="About Me" />
        <SectionDescription
          content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quibusdam accusantium,
          vitae enim maxime illum aperiam quidem ea possimus assumenda eos consectetur, illo
          voluptatibus soluta quo quasi facilis nemo at.`}
        />

        <div className="flex flex-col space-y-3">
          <ProgressSkill name="JavaScript" value={85} />
          <ProgressSkill name="TypeScript" value={80} />
          <ProgressSkill name="React" value={75} />
          <ProgressSkill name="Node.js" value={70} />
          <ProgressSkill name="Next.js" value={85} />
        </div>
      </div>
    </TwoColSection>
  )
}

export default AboutSection
