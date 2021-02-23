import React from 'react'

const SvgState = (props: any) => (
  <svg
    width={24}
    height={24}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <circle id="a" cx={11.378} cy={11.378} r={11.378} />
    </defs>
    <g transform="translate(.222 .956)" fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#E1E1E6" xlinkHref="#a" />
      <circle
        fillOpacity={0.4}
        fill="#141419"
        mask="url(#b)"
        cx={11.378}
        cy={7.111}
        r={4.267}
      />
      <ellipse
        fillOpacity={0.4}
        fill="#141419"
        mask="url(#b)"
        cx={11.378}
        cy={16.356}
        rx={6.4}
        ry={3.556}
      />
    </g>
  </svg>
)

export default SvgState
