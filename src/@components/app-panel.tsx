'use client';

import { ReactNode, useState } from 'react';
import { AppBar, Card, Collapse, Toolbar, Typography, Icon } from '@mui/material';

type AppPanelProps = {
  panelTitle: string;
  iconName: string;
  children: ReactNode;
  collapsible?: boolean;
  isExpand?: boolean;
};

export function AppPanel(props: AppPanelProps) {
  const { panelTitle, iconName, collapsible, isExpand, children } = props;
  const [expanded, setExpanded] = useState(isExpand || false);

  const handleClick = () => {
    if (!collapsible) {
      return;
    }
    setExpanded(!expanded);
  };

  return (
    <Card>
      <AppBar position="static" elevation={0}>
        <Toolbar
          variant="dense"
          onClick={handleClick}
          sx={{
            cursor: collapsible ? 'pointer' : undefined,
          }}
        >
          <Icon className="text-16 mr-4">{iconName}</Icon>
          <Typography variant="subtitle1" color="inherit" className="flex-1">
            {panelTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      {(collapsible && <Collapse>{children}</Collapse>) || children}
    </Card>
  );
}
