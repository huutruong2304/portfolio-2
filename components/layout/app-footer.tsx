import React from 'react'

const AppFooter = () => {
  return (
    <footer className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Code by <b className="text-primary">Truong Nguyen</b> &
      Design by <b className="text-primary">Fawziuiux</b>. All rights reserved.
    </footer>
  )
}

export default AppFooter
