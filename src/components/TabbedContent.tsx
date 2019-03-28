import * as React from 'react';
import {
  createStyles,
  Tab,
  Tabs,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { TabProps } from '@material-ui/core/Tab';

export const styles = createStyles({
  content: {
    display: 'flex',
    flex: 1
  }
});

export const TabbedContent = withStyles(styles)(
  ({ classes, tabs }: TabbedContentProps) => {
    const [tabIndex, setTabIndex] = React.useState(0);
    return (
      <>
        <Tabs value={tabIndex} onChange={(e, value) => setTabIndex(value)}>
          {tabs.map(({ content, ...tabProps }, index) => (
            <Tab key={index} {...tabProps} />
          ))}
        </Tabs>
        <div className={classes.content}>{tabs[tabIndex].content()}</div>
      </>
    );
  }
);

export type TabbedContentTab = TabProps & { content: () => React.ReactNode };

export type TabbedContentProps = WithStyles<typeof styles> & {
  tabs: TabbedContentTab[];
};
