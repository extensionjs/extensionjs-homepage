import * as React from 'react';
import {
  StyleRulesCallback,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

const styles: StyleRulesCallback = (theme: Theme) => ({
  link: {

  },
});
interface ExternalLinkProps {
  url: string;
  text: string;
}

const ExternalLink = (props: ExternalLinkProps & WithStyles) => {
  const { url, text } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      {text}
    </a>
  );
}

/**
 * @render react
 * @name ExternalLink
 * @example
 * <div>
 *  <ExternalLink text="Visit Website" url="https://extensionjs.github.io/"/>
 * </div>
 */
export default withStyles(styles)<ExternalLinkProps & WithStyles>(ExternalLink);
