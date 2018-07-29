import * as React from 'react';
import { Theme, StyleRulesCallback, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '500px',
    width: '100%',
    height: '100%',
  },
});

const Hero = (props: any) => {
  const { classes, children } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {{...children}}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
/**
 * @render react
 * @name Page
 * @example
 * <div>
 *  <Page>
 *    <p>This is a Paragraph inside a Page Component</p>
 *  </Page>
 * </div>
 */
export default withStyles(styles)<any>(Hero);
