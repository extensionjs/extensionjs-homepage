import * as React from 'react';
import { Theme, StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles: StyleRulesCallback = (theme: Theme) => ({
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

interface HeroButtonProps {
  text: string;
  children?: React.ComponentType;
  component?: React.ComponentType;
  variant?: HeroButtonVariant;
  color?: HeroButtonColor;
}

export type HeroButtonVariant = 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab';
export type HeroButtonColor = 'primary' | 'secondary' | 'inherit' | 'default' | undefined;

const HeroButton = (props: HeroButtonProps & WithStyles) => {
  const {
    classes,
    text,
    component,
    children,
    variant,
    color,
    ...others } = props;
  return (
    <React.Fragment>
      <Button
        className={classes.button}
        component={component}
        variant={variant || 'flat'}
        color={color || 'default'}
        {...others}
      >
        {children ? children : text}
      </Button>
    </React.Fragment>
  );
}

/**
 * @render react
 * @name HeroButton
 * @example
 * <div>
 *  <HeroButton text="Click me to be a Hero!" />
 * </div>
 */
export default withStyles(styles)<HeroButtonProps & WithStyles>(HeroButton);
