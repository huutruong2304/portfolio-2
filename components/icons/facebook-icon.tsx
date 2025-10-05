import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  /** Single knob to control both width & height */
  size?: number | string // e.g. 24 | "1em"
  title?: string
}

const FacebookIcon = ({ size = 24, title = 'Facebook', className, ...rest }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="currentColor" // <- color follows CSS text color
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      role="img"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...rest}
    >
      <g clipPath="url(#clip0_1210_2979)">
        <path
          d="M32.4752 16.2376C32.4752 7.26983 25.2054 0 16.2376 0C7.26983 0 0 7.26983 0 16.2376C0 24.3422 5.93783 31.0598 13.7005 32.278V20.9313H9.57766V16.2376H13.7005V12.6603C13.7005 8.59072 16.1247 6.34282 19.8337 6.34282C21.6097 6.34282 23.4684 6.65996 23.4684 6.65996V10.6559H21.421C19.404 10.6559 18.7748 11.9077 18.7748 13.1931V16.2376H23.2782L22.5582 20.9313H18.7748V32.278C26.5374 31.0598 32.4752 24.3422 32.4752 16.2376Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1210_2979">
          <rect width="32.4752" height="32.4752" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FacebookIcon
