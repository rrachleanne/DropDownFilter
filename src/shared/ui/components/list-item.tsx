import { ListItem as MuiListItem } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { theme } from '../../../styles';
import { customColors, } from '../../../styles/globalPallette'

interface IListItemProps {
  children?: any
  icon?: any
  label?: string
  onClick?: (e: any) => void
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(4),
      fontSize: 16,
      lineHeight: '24px',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      alignItems: 'center',
      color: theme.palette.text.primary,
      textTransform: 'capitalize',
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: customColors.background.light,
        cursor: 'pointer',
      },
      '&.Mui-selected, &.Mui-selected:hover': {
        color: theme.palette.primary.main,
        backgroundColor: customColors.background.light
      },
      '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(4),
        height: '20px',
        width: '20px',
      }
    },
  })
})

export default function ListItem(props: IListItemProps) {
  const classes = useStyles();
  const { label, icon, children, ...defaultProps } = props
  return (
    <MuiListItem {...defaultProps} className={classes.root}>
      {props.icon ? props.icon : ''}
      {props.label ? props.label : ''}
      {props.children ? props.children : ''}
    </MuiListItem>
  )
}
