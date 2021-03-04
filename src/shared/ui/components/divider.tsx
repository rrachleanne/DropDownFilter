import { Divider as MuiDivider } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import { theme } from '../../../styles';

interface IDividerProps {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'fullWidth' | 'inset' | 'middle'
  absolute?: boolean
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      backgroundColor: theme.palette.divider
    },
  })
})

export default function Divider(props: IDividerProps) {
  const classes = useStyles();
  return (
    <MuiDivider {...props} className={clsx(classes.root)}/>
  )
}
