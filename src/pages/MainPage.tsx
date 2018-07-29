import * as React from 'react';
import {
  StyleRulesCallback,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import { Button } from 'evergreen-ui';
import Page from '../components/page';
import Hero from '../components/hero';

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
});

const MainPage = (props: any) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Hero
        imageSrc="static/img/logo.png"
        title="ExtensionJS"
        subTitle="An Extension and Plugin Framework for NodeJS"
        actionText="Get Started"
        actionUrl="docs/getting-started"
      />
      <div className={classes.content}>
        <Page>
          <div>
            <Button>I am using 🌲 Evergreen!</Button>
          </div>
        </Page>
      </div>
    </div>
  );
};

export default withStyles(styles)<{}>(MainPage);
