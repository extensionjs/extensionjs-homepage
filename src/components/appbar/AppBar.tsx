import * as React from 'react';
import { StyleRulesCallback } from '@material-ui/core/styles/withStyles';
import { Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { AppBar as MdAppBar, Toolbar, Typography } from '@material-ui/core';

const styles: StyleRulesCallback = (theme: Theme) => ({
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  toolbar: theme.mixins.toolbar,
  hide: {
    display: 'none',
  },
});

interface AppBarProps {
  title: string;
}

class AppBar extends React.Component<AppBarProps & WithStyles, {}> {

  public render() {
    const { classes, title } = this.props;
    return (
      <MdAppBar className={classes.appBar}>
        <Toolbar disableGutters={true}>
          <Typography variant="title" color="inherit" noWrap>
            {{title}}
          </Typography>
        </Toolbar>
      </MdAppBar>
    );
  }
}

export default withStyles(styles)<AppBarProps>(AppBar);
