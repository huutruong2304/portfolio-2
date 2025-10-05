import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  /** Single knob to control both width & height */
  size?: number | string // e.g. 24 | "1em"
  title?: string
}

const YoutubeIcon = ({ size = 24, title = 'Facebook', className, ...rest }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor" // <- color follows CSS text color
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      role="img"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M5.76 2A3.76 3.76 0 0 0 2 5.76v12.48A3.76 3.76 0 0 0 5.76 22h12.48A3.76 3.76 0 0 0 22 18.24V5.76A3.76 3.76 0 0 0 18.24 2zm1.855 4.693h8.77A3.116 3.116 0 0 1 19.5 9.81v4.382a3.116 3.116 0 0 1-3.115 3.116h-8.77A3.116 3.116 0 0 1 4.5 14.19V9.81a3.116 3.116 0 0 1 3.115-3.116zm2.48 3.13a.165.165 0 0 0-.156.163v4.035a.164.164 0 0 0 .237.149l4.101-1.957a.165.165 0 0 0 .004-.295L10.18 9.84a.16.16 0 0 0-.084-.018z"
      />
    </svg>
  )
}

export default YoutubeIcon
