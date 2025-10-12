import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import TestimonialCard from '@/components/custom/testimonial-card'
import AppSection from '@/components/layout/app-section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import React from 'react'
import { TESTIMONIALS } from '@/mock'

// type Props = {}

const TestimonialSection = () => {
  const testimonialData = TESTIMONIALS
  return (
    <AppSection id="testimonials">
      <div className="w-full md:w-1/2 mx-auto">
        <SectionTitle name="Testimonials" />
        <SectionDescription
          content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
                convallis pretium`}
        />
      </div>
      <div className="my-10">
        <Carousel
          opts={{
            align: 'center',
          }}
          className="w-full md:w-[95%] mx-auto"
        >
          <CarouselContent>
            {testimonialData.map((testimonial) => (
              <CarouselItem className="basis-3/4 md:basis-1/2" key={testimonial.name}>
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
  )
}

export default TestimonialSection
