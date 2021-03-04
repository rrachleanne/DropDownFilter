import { createStyles,  makeStyles } from '@material-ui/core';
import React from 'react'

interface IProps {
  title?: string
}

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
    }
  });
})

 
const ShareLayout: React.FC<IProps> = props => { 
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.app}>
        <main className={classes.main}>
        {props.children}
        </main>
      </div>
    </div>
  )
}

export default ShareLayout
