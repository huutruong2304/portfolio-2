import AvatarProfile from '@/components/custom/avatar-profile'
import TwoColSection from '@/components/layout/two-col-section'
import { Button } from '@/components/ui/button'
import React from 'react'
import FacebookIcon from '@/components/icons/facebook-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import YoutubeIcon from '@/components/icons/youtube-icon'
import Link from 'next/link'
import { RevealText } from '@/components/motion/reveal-text'
import { SlideUp } from '@/components/motion/slide-up'
import { ZoomIn } from '@/components/motion/zoom-in'

// type Props = {}

const IntroductionSection = () => {
  return (
    <TwoColSection id="home">
      <div className="order-2 md:order-1">
        <p className="text-lg font-semibold">Hi I am</p>
        <h1 className="text-3xl font-bold  text-orange-500">
          <RevealText text="Truong Nguyen" />
        </h1>
        <SlideUp>
          <h2 className="hidden md:block md:text-7xl font-extrabold mb-10">
            Full Stack
            <br />
            <span className="ml-10 md:ml-20">Developer</span>
          </h2>
          {/* mobile */}
          <p className="my-2 md:my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis corrupti
            nostrum repudiandae sapiente, rem asperiores impedit maiores ut deserunt similique quam
            rerum, assumenda est excepturi placeat voluptatum obcaecati sed.{' '}
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600">Hire Me</Button>
        </SlideUp>
      </div>
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <ZoomIn>
          <div className="flex flex-col items-center space-y-5">
            <AvatarProfile src={'/images/user/avatar-2.png'} alt={'truong nguyen avatar'} />
            <div className="flex space-x-5">
              <Link href={'#'}>
                <FacebookIcon className="social-icon" />
              </Link>
              <Link href={'#'}>
                <GithubIcon className="social-icon" />
              </Link>
              <Link href={'#'}>
                <LinkedinIcon className="social-icon" />
              </Link>
              <Link href={'#'}>
                <YoutubeIcon className="social-icon" />
              </Link>
            </div>
          </div>
        </ZoomIn>
      </div>
    </TwoColSection>
  )
}

export default IntroductionSection
