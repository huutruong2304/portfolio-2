'use client'
import ProjectCard from '@/components/custom/project-card'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/mock'
import React, { useState } from 'react'

// type Props = {}

const ProjectSection = () => {
  const projectCategories = ['All', 'React', 'Next.js', 'Backend System', 'Dashboard System']
  const projectData = PROJECTS
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <AppSection id="projects">
      <div className="w-full md:w-1/2 mx-auto">
        <SectionTitle name="My Projects" />
        <SectionDescription
          content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis
          pretium`}
        />
      </div>
      <div>
        <div className="my-10 flex flex-wrap justify-start md:justify-center space-x-3 space-y-3">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={
                category === selectedCategory
                  ? 'text-background !bg-primary hover:text-background hover:bg-orange-600 cursor-pointer'
                  : 'cursor-pointer'
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
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
  )
}

export default ProjectSection
