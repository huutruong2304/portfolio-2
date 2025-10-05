import ProgressSkill from '@/components/custom/progress-skill'
import FacebookIcon from '@/components/icons/facebook-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import YoutubeIcon from '@/components/icons/youtube-icon'
import AppContainer from '@/components/layout/app-container'
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/app-header'
import TwoColSection from '@/components/layout/two-col-section'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <AppHeader />
      <AppContainer>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* introduce */}
          <TwoColSection id="home">
            <div>
              <p className="font-semibold">Hi I am</p>
              <h1 className="text-3xl font-bold  text-orange-500">Truong Nguyen</h1>
              <h2 className="text-7xl font-extrabold mb-10">
                Full Stack
                <br />
                <span className="invisible">{'Full '}</span>
                Developer
              </h2>
              <p className="my-5">
                I am a full-stack developer with a passion for creating innovative and user-friendly
                web applications. With a strong foundation in both front-end and back-end
                development, I have the skills to bring ideas to life and deliver exceptional user
                experiences.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600">Hire Me</Button>
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col items-center space-y-5">
                <div className="w-96 h-96 bg-transparent rounded-full border-2 border-orange-500 shadow-2xl">
                  <AspectRatio ratio={1 / 1} className="w-full rounded-full overflow-hidden">
                    <Image
                      className="object-cover"
                      src={'/avatar.png'}
                      fill
                      alt="truong-nguyen-avatar"
                    />
                  </AspectRatio>
                </div>
                <div className="flex space-x-5">
                  <Link href={'#'}>
                    <FacebookIcon className="w-8 h-8" />
                  </Link>
                  <Link href={'#'}>
                    <GithubIcon className="w-8 h-8" />
                  </Link>
                  <Link href={'#'}>
                    <LinkedinIcon className="w-8 h-8" />
                  </Link>
                  <Link href={'#'}>
                    <YoutubeIcon className="w-8 h-8" />
                  </Link>
                </div>
              </div>
            </div>
          </TwoColSection>
          {/* about me */}
          <TwoColSection id="about">
            <div className="flex justify-start items-center">
              <div className="w-96 h-96 bg-transparent rounded-full border-2 border-orange-500 shadow-2xl">
                <AspectRatio ratio={1 / 1} className="w-full rounded-full overflow-hidden">
                  <Image
                    className="object-cover"
                    src={'/avatar.png'}
                    fill
                    alt="truong-nguyen-avatar"
                  />
                </AspectRatio>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-extrabold mb-10">About Me</h2>
              <p className="my-5">
                I am a full-stack developer with a passion for creating innovative and user-friendly
                web applications. With a strong foundation in both front-end and back-end
                development, I have the skills to bring ideas to life and deliver exceptional user
                experiences.
              </p>
              <div className="flex flex-col space-y-3">
                <ProgressSkill name="JavaScript" value={85} />
                <ProgressSkill name="TypeScript" value={80} />
                <ProgressSkill name="React" value={75} />
                <ProgressSkill name="Node.js" value={70} />
                <ProgressSkill name="Next.js" value={85} />
              </div>
            </div>
          </TwoColSection>
        </main>
      </AppContainer>
      <AppFooter />
    </div>
  )
}
