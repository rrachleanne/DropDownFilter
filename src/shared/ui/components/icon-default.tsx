import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'
import icons from '@leapdev/gui-icons/dist/icons/sprite-filled.svg'
import React from 'react'

interface IIconProps extends SvgIconProps {
  iconName?: string
}

export default function IconDefault(props: IIconProps) {
  const { iconName, ...defaultProps } = props
  return (
    <SvgIcon {...defaultProps}>
      <svg fill="currentColor">
        <use xlinkHref={`${icons}#${iconName}`} />
      </svg>
    </SvgIcon>
  )
}
