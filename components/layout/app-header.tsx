import React from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'

const AppHeader = () => {
  const headerList: {
    id: string
    name: string
    link: string
  }[] = [
    { id: 'home', name: 'Home', link: '#home' },
    { id: 'about', name: 'About Me', link: '#about' },
    { id: 'services', name: 'Services', link: '#services' },
    { id: 'projects', name: 'Projects', link: '#projects' },
    { id: 'testimonials', name: 'Testimonials', link: '#testimonials' },
    { id: 'contact', name: 'Contact', link: '#contact' },
  ]
  return (
    <header className="py-5 flex items-center justify-between app-container sticky top-0 bg-white z-50">
      <div className="text-primary font-extrabold text-2xl">LOGO</div>
      <ul className="space-x-10 items-center hidden md:flex">
        {headerList.map((item) => (
          <li
            key={item.id}
            className="text-primary hover:text-orange-500 font-semibold transition duration-300 text-sm cursor-pointer"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
        <li>
          <Button
            size={'sm'}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
          >
            Download CV
          </Button>
        </li>
      </ul>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant={'ghost'}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-1/2">
            <ul className="flex flex-col space-y-5 mt-10 p-4">
              {headerList.map((item) => (
                <li
                  key={item.id}
                  className="text-primary hover:text-orange-500 font-semibold transition duration-300 text-sm cursor-pointer"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              <li>
                <Button
                  size={'sm'}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                >
                  Download CV
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default AppHeader
