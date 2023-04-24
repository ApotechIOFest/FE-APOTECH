import React from 'react'
import { IconProps } from './interface'

export const ApotechLogo: React.FC<IconProps> = ({
  fill = 'fill-current',
  stroke,
  className,
  size,
}) => {
  return (
    <svg
      viewBox="0 0 291 292"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} ${fill} ${stroke} ${className}`}
    >
      <path
        d="M252.527 83.3186H224.366C224.366 83.3186 224.212 99.4895 224.058 102.57H252.527C263.146 102.57 271.763 111.194 271.763 121.821V170.025C271.763 180.652 263.146 189.276 252.527 189.276H198.667C187.434 189.276 179.124 188.198 172.968 186.042C164.197 183.116 159.734 178.034 157.58 171.257C153.271 171.411 149.116 171.411 145.73 171.411C143.114 171.411 140.498 171.411 137.882 171.411C140.96 186.35 149.577 200.057 173.122 205.755C177.893 206.833 183.279 207.603 189.126 208.065V252.728C189.126 263.354 180.509 271.979 169.89 271.979H121.416C110.798 271.979 102.181 263.354 102.181 252.728V198.825C102.181 155.395 118.492 155.395 145.576 155.395C172.045 155.395 208.362 155.395 208.362 92.5591V38.6561C208.362 17.403 190.973 0 169.737 0L121.416 0.462025C100.18 0.462025 82.7908 17.865 82.7908 39.1181V83.3186H38.6255C17.2353 83.3186 0 100.722 0 121.975V170.179C0 191.432 17.2353 208.835 38.6255 208.835H66.7867V199.133C66.7867 195.745 66.9405 192.511 67.0944 189.43H38.6255C28.0073 189.43 19.3897 180.806 19.3897 170.179V121.975C19.3897 111.348 28.0073 102.724 38.6255 102.724H92.4857C103.719 102.724 112.029 103.802 118.185 105.958C126.956 108.884 131.419 113.966 133.573 120.743C137.882 120.589 142.037 120.589 145.423 120.589C148.039 120.589 150.655 120.589 153.271 120.589C150.193 105.65 141.575 91.943 118.031 86.2447C113.26 85.1667 107.874 84.3966 102.027 83.9346V39.2722C102.027 28.6456 110.644 20.0211 121.262 20.0211H169.583C180.201 20.0211 188.818 28.6456 188.818 39.2722V93.1751C188.818 136.605 172.507 136.605 145.423 136.605C118.954 136.605 82.6369 136.605 82.6369 199.441V253.344C82.6369 274.597 100.026 292 121.262 292H169.583C190.819 292 208.208 274.597 208.208 253.344V209.143H252.374C273.61 209.143 290.999 191.741 290.999 170.487V121.975C291.153 100.722 273.764 83.3186 252.527 83.3186Z"
        fill="url(#paint0_linear_30_2395)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_2395"
          x1="0"
          y1="146.12"
          x2="291.093"
          y2="146.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2B88D9" />
          <stop offset="1" stopColor="#26E0F5" />
        </linearGradient>
      </defs>
    </svg>
  )
}
