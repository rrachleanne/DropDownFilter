import { InputBase as MuiInputBase } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { customColors } from '../../../styles/globalPallette'
import { isDesktop } from '../helpers'

interface IInputProps {
  autoComplete?: string
  endAdornment?: React.ReactNode
  fullWidth?: boolean
  id?: string
  inputProps?: object
  inputRef?: React.Ref<any>
  name?: string
  onBlur?: any
  onChange?: any
  placeholder?: string
  required?: boolean
  startAdornment?: React.ReactNode
  type?: string
  value?: any
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      border: isDesktop ? `1px solid ${customColors.text.light}` : `1px solid ${customColors.utility.border}`,
      backgroundColor: customColors.background.main,
      color: customColors.text.main,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 8,
      paddingRight: 8,
      fontSize: '14px',
      lineHeight: '18px',
      '&:placeholder': {
        color: customColors.text.light,
      },
      '&:hover': {
        border: isDesktop ? `1px solid ${customColors.text.light}` : `1px solid ${customColors.utility.border}`,
      },
      '&$focused': {
        border: isDesktop ? `1px solid ${customColors.text.light}` : `1px solid ${customColors.utility.border}`,
        boxShadow: 'none',
      },
      '& svg': {
        color: customColors.text.main,
      },
    },
    input: {
      '&[type="search"]::-webkit-search-decoration, &[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-results-button, &[type="search"]::-webkit-search-results-decoration,': {
        WebkitAppearance: 'none',
      },
    },
    focused: {
      border: isDesktop ? `1px solid ${customColors.text.light}` : `1px solid ${customColors.background.main}`,
      boxShadow: '0 0 0 1px #47556B',
      backgroundColor: customColors.background.main,
      '& input': {
        color: customColors.text.main,
      },
      '& svg': {
        color: customColors.text.main,
      },
    }
  })
})

/**
 * Input is an extension of [material-ui `InputBase`](https://material-ui.com/api/input-base/).
 * To import, use `import Input from '/path/to/src/shared/featured/components/input'`
 */

export default function Input(props: IInputProps) {
  const classes = useStyles() 
 
  return (
    <MuiInputBase
      {...props}
      classes={{ root: clsx(classes.root), focused: classes.focused, input: classes.input }}
    />
  )
}
