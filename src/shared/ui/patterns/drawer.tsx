import React from 'react';
import { createStyles,  makeStyles } from '@material-ui/core/styles';
import { Drawer as MuiDrawer } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '../components/divider';


interface IProps {
  variant?: any
  open?: any
  PaperProps?: any
  onClose?: (e: any) => void
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {}
  });
})

const Drawer: React.FC<IProps> = props => { 
  const classes = useStyles()
  const { variant, ...defaultProps } = props
  let variantProp
  switch (variant) {
    case 'permanent':
      variantProp = variant
      break
    case 'temporary':
      variantProp = variant
      break
    case 'persistent':
      variantProp = variant
      break
    default:
      variantProp = 'permanent'
  }
  return (
    <MuiDrawer {...defaultProps} variant={variantProp}>
      <Divider/>
      <List>
        <ListItem>
          Menu Title
        </ListItem>
        <ListItem>
          <ListItemText>
            Menu Item
          </ListItemText>
        </ListItem>
      </List>
      <Divider/>
    </MuiDrawer>
  );
}

export default Drawer