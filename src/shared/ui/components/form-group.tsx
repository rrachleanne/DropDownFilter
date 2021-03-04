import { FormLabel as MuiFormLabel } from '@material-ui/core';

import { createStyles, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react' 

interface ILabelProps {
  children?: string
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
    },
  })
})

export default function FormGroup(props: ILabelProps) {
  const classes = useStyles();
  return (
    <MuiFormLabel {...props} />
  )
}
