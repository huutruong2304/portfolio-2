import FacebookIcon from '@/components/icons/facebook-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import YoutubeIcon from '@/components/icons/youtube-icon'
import { HEADER_ITEMS } from '@/const'
import Link from 'next/link'
import React from 'react'

const AppFooter = () => {
  const headerList = HEADER_ITEMS
  return (
    <>
      <div className="bg-card flex flex-col justify-center items-center py-15">
        <div className="text-xl text-gray-400 font-extrabold md:text-4xl uppercase mt-5">
          coding with truong
        </div>
        <ul className="w-3/4 md:w-full items-center flex flex-wrap justify-center mt-5 md:mt-15 space-x-4 space-y-2 md:space-x-10">
          {headerList.map((item) => (
            <li
              key={item.id}
              className="text-foreground hover:text-primary font-semibold transition duration-300 text-sm cursor-pointer"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-5 mt-5 md:mt-15">
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
      <footer className="bg-gray-900 py-5 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Code by <b className="text-primary">Truong Nguyen</b> &
        Design by <b className="text-primary">Fawziuiux</b>. All rights reserved.
      </footer>
    </>
  )
}

export default AppFooter
