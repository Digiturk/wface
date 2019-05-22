import { createStyles, Paper, Popper, withStyles, WithStyles, Grow, ClickAwayListener, MenuList } from '@material-ui/core';
import * as React from 'react';
import { WButton, WIconButton, WMenuItem, BaseScreenProps, BaseScreenPropsContext } from '../../..';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { lastDayOfISOWeek } from 'date-fns';
import { BaseComponentProps } from '../../base/base-component-props';

export interface WNestedPageComponentProps {
  payload: any;
  lastState: any;
  navigateTo: (name: string, payload?: any) => void;
  goBack: () => void;
}

export interface WNestedPageItem extends BaseComponentProps {
  component: React.ReactType<WNestedPageComponentProps & BaseScreenProps>
  name: string;
  title?: string | ((payload: any) => string);
  subItems?: WNestedPageItem[];
}

export interface WNestedPageLayoutProps extends WithStyles<typeof styles> {
  root: WNestedPageItem;
  state?: WNestedPageLayoutState;
  onStateChanged?: (state: WNestedPageLayoutState) => void;
}

export interface WNestedPageLayoutState {
  stack: { item: WNestedPageItem, payload: any, ref: React.RefObject<any>, state?: any }[];
  anchorEl: any;
  openMenuIndex: number;
}

export class WNestedPageLayoutInner extends React.Component<WNestedPageLayoutProps, WNestedPageLayoutState> {
  constructor(props) {
    super(props);

    this.state = props.state || {
      stack: [{
        item: props.root,
        payload: {}
      }],
      anchorEl: null,
      openMenuIndex: -1
    }
  }

  getTitle = (stackItem) => {
    let title = stackItem.item.title || stackItem.item.name;
    if (typeof title === "function") {
      title = title(stackItem.payload);
    }

    return title;
  }


  onStateChanged = () => {
    this.props.onStateChanged && this.props.onStateChanged(this.state);
  }

  renderComponent = (baseScreenProps: BaseScreenProps) => {
    const last = this.state.stack[this.state.stack.length - 1];

    return (      
      // @ts-ignore
      <last.item.component
        // @ts-ignore
        ref={last.ref}
        lastState={last.state}
        {...baseScreenProps}
        payload={last.payload}
        navigateTo={(name, payload) => {
          last.state = last.ref && last.ref.current && last.ref.current.state;
          const item = last.item.subItems.find(a => a.name === name);

          this.setState({ stack: [...this.state.stack, { item, payload, ref: React.createRef() }] }, () => this.onStateChanged());
        }}
        goBack={() => {
          const stack = [...this.state.stack];
          stack.pop();

          this.setState({ stack }, () => this.onStateChanged());
        }}
      />
    );
  }

  render() {
    return (
      <BaseScreenPropsContext.Consumer>
        {(baseScreenProps: BaseScreenProps) => (
          <div className={this.props.classes.root}>
            {this.state.stack.map((current, index) => {
              return (
                <div style={{ display: 'inline-block' }}>
                  <WButton
                    id={current.item.id}
                    disabled={index === this.state.stack.length - 1}
                    className={this.props.classes.button}
                    onClick={() => {
                      let stack = [...this.state.stack];
                      stack = stack.slice(0, index + 1);
                      this.setState({ stack }, () => this.onStateChanged());
                    }}
                  >
                    {this.getTitle(current)}
                  </WButton>

                  {index !== this.state.stack.length - 1 &&
                    <>
                      <WIconButton
                        id={current.item.id + "-btn-menu"}
                        aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        className={this.props.classes.iconButton}
                        style={{ transform: this.state.anchorEl && this.state.openMenuIndex === index ? 'rotate(90deg)' : 'none' }}
                        color="primary"
                        icon="chevron_right"
                        disabled={current.item.subItems.length < 2}
                        onClick={event => this.setState({ anchorEl: event.currentTarget, openMenuIndex: index }, () => this.onStateChanged())}
                      />
                      <Popper className={this.props.classes.popper} open={this.state.anchorEl && this.state.openMenuIndex === index} anchorEl={this.state.anchorEl} transition disablePortal placement="bottom-start">
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center left' : 'center left' }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={(event) => this.setState({ anchorEl: null, openMenuIndex: -1 }, () => this.onStateChanged())}>
                                <MenuList dense>
                                  {current.item.subItems.map(item => (
                                    <WMenuItem
                                      id={item.id}
                                      key={item.name}
                                      dense
                                      onClick={() => {
                                        if (item.name === this.state.stack[index + 1].item.name) {
                                          this.setState({ anchorEl: null, openMenuIndex: -1 }, () => this.onStateChanged());
                                          return;
                                        }

                                        let stack = [...this.state.stack];
                                        stack[index + 1] = { item, payload: stack[index + 1].payload, ref: React.createRef() };
                                        stack = stack.slice(0, index + 1 + 1);

                                        this.setState({ anchorEl: null, openMenuIndex: -1, stack }, () => this.onStateChanged());
                                      }}
                                      selected={item.name === this.state.stack[index + 1].item.name}
                                    >
                                      {this.getTitle({ item, payload: this.state.stack[index + 1].payload })}
                                    </WMenuItem>
                                  ))}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </>
                  }
                </div>
              )
            })}
            {this.renderComponent(baseScreenProps)}
          </div>
        )}

      </BaseScreenPropsContext.Consumer>
    );
  }
}

const styles = (theme: WTheme) => createStyles({
  root: {
    padding: theme.spacing.unit
  },
  button: {
    '&:disabled': {
      color: theme.palette.grey[600]
    }
  },
  iconButton: {
    transition: 'all ease 300ms',
    padding: theme.spacing.unit / 2,
    '&:disabled': {
      color: theme.palette.grey[600]
    }
  },
  popper: {
    zIndex: theme.zIndex.tooltip
  }
});

export const WNestedPageLayout = withStyles(styles, { withTheme: true })((props: WNestedPageLayoutProps) => <WNestedPageLayoutInner {...props} />)

