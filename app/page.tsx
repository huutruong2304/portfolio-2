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

import { Monitor, Server, Boxes, Database, Workflow, Cloud, Gauge, ShieldCheck } from 'lucide-react'
import { ProjectItem, Service } from '@/types'
import ServiceCard from '@/components/custom/service-card'
import SectionTitle from '@/components/custom/section-title'
import ProjectCard from '@/components/custom/project-card'

/** Full list (8 items) */
export const SERVICES: Service[] = [
  {
    key: 'frontend',
    title: 'Frontend (React/Next.js)',
    description: 'Build fast, accessible UIs with solid SEO and Core Web Vitals.',
    icon: Monitor,
    highlights: ['Next.js App Router', 'shadcn/ui + Tailwind', 'SSR/ISR'],
  },
  {
    key: 'backend',
    title: 'Backend API (Node/NestJS)',
    description: 'Design secure REST/GraphQL APIs with authentication and rate limiting.',
    icon: Server,
    highlights: ['Modular NestJS', 'JWT/OAuth', 'Caching'],
  },
  {
    key: 'microservices',
    title: 'Microservices & Messaging',
    description: 'Decouple services and scale with asynchronous communication.',
    icon: Boxes,
    highlights: ['RabbitMQ', 'Event-driven', 'API Gateway'],
  },
  {
    key: 'database',
    title: 'Database & ORM',
    description: 'Schema design and query optimization for high throughput.',
    icon: Database,
    highlights: ['Postgres/MongoDB', 'Prisma/Mongoose', 'Indexing'],
  },
  {
    key: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Reliable deployments with automated pipelines and rollbacks.',
    icon: Workflow,
    highlights: ['Docker/PM2', 'GitHub Actions', 'Zero-downtime'],
  },
  {
    key: 'cloud',
    title: 'Cloud & Infrastructure',
    description: 'Hardened environments with monitoring, logging, and SSL.',
    icon: Cloud,
    highlights: ['Nginx/SSL', 'AWS/Azure/VPS', 'Observability'],
  },
  {
    key: 'performance',
    title: 'Performance & SEO',
    description: 'Speed audits and search visibility for business impact.',
    icon: Gauge,
    highlights: ['Image/CDN', 'Bundle analysis', 'sitemap/robots'],
  },
  {
    key: 'qa',
    title: 'Testing & Quality',
    description: 'Confidence before release with automated testing.',
    icon: ShieldCheck,
    highlights: ['Jest/Playwright', 'Type checking', 'E2E'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    frontImage: '/images/project/project-sample-1-1.png',
    backImage: '/images/project/project-sample-1-2.png',
    title: 'Booking Dashboard',
    topics: ['React', 'Next.js', 'TypeScript', 'Dashboard System', 'Tailwind'],
  },
  {
    frontImage: '/images/project/project-sample-2-1.png',
    backImage: '/images/project/project-sample-2-2.png',
    title: 'E-commerce API',
    topics: ['Backend System', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    frontImage: '/images/project/project-sample-3-1.png',
    backImage: '/images/project/project-sample-3-2.png',
    title: 'Realtime Chat App',
    topics: ['Next.js', 'React', 'TypeScript', 'Redis', 'WebSocket'],
  },
]

export const PROJECT_CATEGORIES = ['All', 'React', 'Next.js', 'Backend System', 'Dashboard System']

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
                    src={'/avatar-2.png'}
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
              {SERVICES.map((service) => (
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
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
                convallis pretium
              </p>
            </div>
            <div>
              <div className="my-5 flex justify-center space-x-3">
                {PROJECT_CATEGORIES.map((category) => (
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
              <div className="grid grid-cols-3 gap-10 mt-10">
                {PROJECTS.map((project) => (
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
        </main>
      </AppContainer>
      <AppFooter />
    </div>
  )
}
