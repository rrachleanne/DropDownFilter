import { Button as MuiButton, CircularProgress } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { customColors } from '../../../styles/globalPallette'


interface IButtonProps {
  children: any
  isLoading?: boolean
  color?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium'
  variant?: 'contained' | 'text' | 'outlined'
  fullWidth?: boolean
  disabled?: boolean
  onClick?: (e: any) => void
  refProp?: React.RefObject<HTMLButtonElement>
}

const useStyles = makeStyles(theme => {
  return createStyles({
    root: {
      minWidth: 'initial',
      boxShadow: 'none',
      textTransform: 'uppercase',
      [theme.breakpoints.up('sm')]: {
        minWidth: '80px',
      },
      '&:hover': {
        boxShadow: 'none',
      },
      "&.MuiButton-sizeSmall": {
        height: '30px',
        fontSize: '12px',
        padding: '7px 12px',
      },
      "&.MuiButton-contained": {
        color: customColors.primary.main,
        backgroundColor: customColors.background.light,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#E6E7EB',
          boxShadow: 'none',
        },
        '&:focus': {
          boxShadow: `0 0 0 2px rgba(162, 174, 195, 0.4)`,
        },
        "&.MuiButton-containedPrimary": {
          color: customColors.primary.contrastText,
          backgroundColor: customColors.primary.main,
          '&:hover': {
            backgroundColor: customColors.primary.dark,
          },
          '&:focus': {
            boxShadow: `0 0 0 2px rgba(162, 174, 195, 0.4)`,
          }
        },
        "&.MuiButton-containedSecondary": {
          color: customColors.secondary.contrastText,
          backgroundColor: customColors.secondary.main,
          '&:hover': {
            backgroundColor: customColors.secondary.dark,
          },
          '&:focus': {
            boxShadow: `0 0 0 2px rgba(233,214, 197, 0.4)`,
          }
        },
      },
      '&.MuiButton-text': {
        padding: '8px 16px',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    }
  })
})

export default function Button(props: IButtonProps) {
  const { isLoading, ...defaultProps } = props;
  const classes = useStyles(props)
  return (
    <MuiButton
      {...defaultProps}
      className={classes.root}
      onClick={defaultProps.onClick}
      ref={defaultProps.refProp}>
      {!isLoading ? defaultProps.children : <CircularProgress size={16} color="inherit" />}
    </MuiButton>
  )
}
