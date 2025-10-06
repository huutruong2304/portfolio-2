import ProgressSkill from '@/components/custom/progress-skill'
import FacebookIcon from '@/components/icons/facebook-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import YoutubeIcon from '@/components/icons/youtube-icon'
import AppContainer from '@/components/layout/app-container'
import AppFooter from '@/components/layout/app-footer'
import AppHeader from '@/components/layout/app-header'
import AppSection from '@/components/layout/app-section'
import TwoColSection from '@/components/layout/two-col-section'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/custom/service-card'
import SectionTitle from '@/components/custom/section-title'
import ProjectCard from '@/components/custom/project-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import TestimonialCard from '@/components/custom/testimonial-card'
import { SERVICES, PROJECTS, TESTIMONIALS } from '@/mock'
import { Input } from '@/components/ui/input'

export default async function Home() {
  const projectCategories = ['All', 'React', 'Next.js', 'Backend System', 'Dashboard System']
  const serviceData = SERVICES
  const projectData = PROJECTS
  const testimonialData = TESTIMONIALS

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
                      src={'/images/user/avatar.png'}
                      fill
                      alt="truong-nguyen-avatar"
                    />
                  </AspectRatio>
                </div>
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
            </div>
          </TwoColSection>
          {/* about me */}
          <TwoColSection id="about">
            <div className="flex justify-start items-center">
              <div className="w-96 h-96 bg-transparent rounded-full border-2 border-orange-500 shadow-2xl">
                <AspectRatio ratio={1 / 1} className="w-full rounded-full overflow-hidden">
                  <Image
                    className="object-cover"
                    src={'/images/user/avatar-2.png'}
                    fill
                    alt="truong-nguyen-avatar"
                  />
                </AspectRatio>
              </div>
            </div>
            <div>
              <SectionTitle name="About Me" />
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
          {/* services */}
          <AppSection id="services">
            <div className="w-1/2 mx-auto">
              <SectionTitle name="Services" className="text-center" />
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
                convallis pretium
              </p>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-16">
              {serviceData.map((service) => (
                <ServiceCard
                  key={service.key}
                  name={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </AppSection>
          {/* projects */}
          <AppSection id="projects">
            <div className="w-1/2 mx-auto">
              <SectionTitle name="My Projects" className="text-center" />
              <p className="text-center my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
                convallis pretium
              </p>
            </div>
            <div>
              <div className="my-10 flex justify-center space-x-3">
                {projectCategories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className={
                      category === 'All'
                        ? 'bg-orange-500 text-white hover:bg-orange-600 hover:text-white cursor-pointer'
                        : 'cursor-pointer'
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-10 py-5">
                {projectData.map((project) => (
                  <ProjectCard
                    key={project.title}
                    frontImage={project.frontImage}
                    backImage={project.backImage}
                    title={project.title}
                    topics={project.topics}
                  />
                ))}
              </div>
            </div>
          </AppSection>
          {/* testimonials */}
          <AppSection id="testimonials">
            <div className="w-1/2 mx-auto">
              <SectionTitle name="Testimonials" className="text-center" />
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
                convallis pretium
              </p>
            </div>
            <div className="my-10">
              <Carousel
                opts={{
                  align: 'center',
                }}
                className="w-full"
              >
                <CarouselContent>
                  {testimonialData.map((testimonial) => (
                    <CarouselItem className="basis-1/2" key={testimonial.name}>
                      <TestimonialCard
                        content={testimonial.content}
                        name={testimonial.name}
                        profession={testimonial.profession}
                        avatar={testimonial.avatar}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </AppSection>
          {/* contact */}
          <AppSection id="contact">
            <div className="w-1/2 mx-auto py-10">
              <SectionTitle name={"Let's work together"} className="text-center" />
              <p className="text-center my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
              </p>
              <div className="flex space-x-3 mt-10">
                <Input type="email" placeholder="Enter your email" className="h-12" />
                <Button className="font-bold h-12">Contact me</Button>
              </div>
            </div>
          </AppSection>
        </main>
      </AppContainer>
      <AppFooter />
    </div>
  )
}
