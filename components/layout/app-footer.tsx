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
      <div className="bg-gray-100 flex flex-col justify-center items-center py-15">
        <div className="text-gray-400 font-extrabold text-4xl uppercase mt-5">
          coding with truong
        </div>
        <ul className="space-x-10 items-center hidden md:flex mt-15">
          {headerList.map((item) => (
            <li
              key={item.id}
              className="text-black hover:text-primary font-semibold transition duration-300 text-sm cursor-pointer"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="flex space-x-5 mt-15">
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
