import React from 'react'
import { IconProps } from './interface'

export const MedicalStaff: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  // TODO: Place svg's elements here and strip out sizing, fill, and stroke attribute then place className={`${size} ${fill} ${stroke} ${className}`} in the <svg> tag
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${fill} ${stroke} ${className}`}
    >
      <path
        d="M46 1H6C3.23858 1 1 3.23858 1 6V46C1 48.7614 3.23858 51 6 51H46C48.7614 51 51 48.7614 51 46V6C51 3.23858 48.7614 1 46 1Z"
        fill="white"
        stroke="#2B8BDA"
        strokeMiterlimit="10"
      />
      <path
        d="M17.26 16.9545C17.5361 16.9545 17.76 16.7307 17.76 16.4545V14.7099C17.76 12.9411 19.2156 11.5 20.96 11.5H31.02C32.7809 11.5 34.22 12.9576 34.22 14.7099V16.4545C34.22 16.7307 34.4439 16.9545 34.72 16.9545H34.74H40.44C42.1226 16.9545 43.5 18.3337 43.5 20.0241V37.4305C43.5 39.1208 42.1226 40.5 40.44 40.5H11.56C9.8774 40.5 8.5 39.1208 8.5 37.4305V20.0241C8.5 18.3337 9.8774 16.9545 11.56 16.9545H17.26Z"
        fill="#2B8BDA"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.78 15.9747H21.2V15.5523C21.2 15.0049 21.6574 14.5482 22.2 14.5482H29.78C30.3226 14.5482 30.78 15.0049 30.78 15.5523V15.9747Z"
        fill="#2B8BDA"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.8 30.8744C28.5238 30.8744 28.3 31.0983 28.3 31.3744V33.3798C28.3 33.887 27.8826 34.3036 27.38 34.3036H24.6C24.0974 34.3036 23.6799 33.887 23.6799 33.3798V31.3744C23.6799 31.0983 23.4561 30.8744 23.1799 30.8744H21.1799C20.6774 30.8744 20.2599 30.4578 20.2599 29.9506V27.1833C20.2599 26.6761 20.6774 26.2595 21.1799 26.2595H23.1799C23.4561 26.2595 23.6799 26.0356 23.6799 25.7595V23.7541C23.6799 23.2469 24.0974 22.8303 24.6 22.8303H27.38C27.8826 22.8303 28.3 23.2469 28.3 23.7541V25.7595C28.3 26.0356 28.5238 26.2595 28.8 26.2595H30.8C31.3026 26.2595 31.72 26.6761 31.72 27.1833V29.9506C31.72 30.4578 31.3026 30.8744 30.8 30.8744H28.8Z"
        fill="#2B8BDA"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
