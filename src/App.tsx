import * as React from 'react';
import {
  StyleRulesCallback,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withRoot from './withRoot';
import AppBar from './components/appbar';
import MainPage from './pages/MainPage';

const styles: StyleRulesCallback<'root'> = (theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  appFrame: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0,
  },
});

type AppStyles = WithStyles<'root' | 'content' | 'appBar' | 'toolbar' | 'appFrame'>

class App extends React.Component<AppStyles, {}> {

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar title="ExtensionJS Homepage"  />
          <main className={classes.content}>
            <Router>
              <div>
                <Route path="/" component={MainPage} />
              </div>
            </Router>
          </main>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles, { withTheme: true })<{}>(App));
