import { Chip as MuiChip } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { customColors, } from '../../../styles/globalPallette'

interface IChipProps {
  disabled?: boolean
  icon?: any
  label: any
  size?: 'small' | 'medium'
  variant?: 'default' | 'outlined'
  color?: 'default' | 'success'
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      borderRadius: 20,
      height: 36,
      paddingLeft: 12,
      paddingRight: 12,
      backgroundColor: customColors.tertiary.lighter,
      color: customColors.primary.main,
      "& svg": {
        color: 'currentColor',
      },
      "& .MuiSvgIcon-root": {
        fontSize: 20
      },
      '& .MuiChip-label': {
        fontSize: '14px',
        lineHeight: 1,
        color: 'inherit'
      },
      '&.MuiChip-sizeSmall': {
        height: 28,
        paddingLeft: 8,
        paddingRight: 8
      },
    },
    chipSuccess: {
      color: customColors.helper.white,
      backgroundColor: customColors.helper.success,
      borderColor: customColors.helper.success,
      "& svg": {
        color: "currenColor"
      }
    },
    chipDefault: {},
  })
})

export default function Chip(props: IChipProps) {
  const classes = useStyles()
  const { color, ...defaultProps } = props
  let chipProp
  switch (color) {
    case 'default':
      chipProp = classes.chipDefault
      break
    case 'success':
      chipProp = classes.chipSuccess
      break
    default:
      chipProp = classes.chipDefault
  }
  return (
    <MuiChip
    {...defaultProps}
    className={clsx(chipProp, classes.root)}/>
  )
}
