import * as React from 'react';
import {
  Theme,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HeroButton from '../hero-button';
import { Link } from 'react-router-dom';

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    flex: '1 0 100%',
  },
  hero: {
    minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color:
      theme.palette.type === 'light'
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 28,
    },
    whiteSpace: 'nowrap',
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 500,
    textAlign: 'center',
  },
  content: {
    paddingBottom: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 12,
    },
  },
  buttonMargin: {
    marginTop: theme.spacing.unit * 3,
  },
  logo: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 4}px`,
    width: '100%',
    height: '35vw',
    maxHeight: 200,
  },
});

interface HeroProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  actionText: string;
  actionUrl: string;
}

const Hero = (props: HeroProps & WithStyles) => {
  const { classes, imageSrc, title, subTitle, actionText, actionUrl } = props;
  return (
    <div className={classes.hero}>
      <div className={classes.content}>
        <img src={imageSrc} alt="logo" className={classes.logo} />
        <div className={classes.text}>
          <Typography
            variant="display2"
            align="center"
            component="h1"
            color="inherit"
            gutterBottom
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant="headline"
            component="h2"
            color="inherit"
            gutterBottom
            className={classes.headline}
          >
            {subTitle}
          </Typography>
          <div className={classes.buttonMargin}>
            <HeroButton
              component={(properties: any) => (
                <Link to={actionUrl} {...properties} />
              )}
              variant="outlined"
              color="primary"
              text={actionText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @render react
 * @name Hero
 * @example
 * <div>
 *  <Hero
 *    title="Hero Title"
 *    subTitle="Here goes the subtitle!"
 *    imageSrc="./images/demo.png"
 *    actionText="Getting Started"
 *    actionUrl="/demo/getting-started"
 *  />
 * </div>
 */
export default withStyles(styles)<HeroProps>(Hero);
