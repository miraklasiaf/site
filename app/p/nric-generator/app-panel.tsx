'use client';

import { ReactNode, useState } from 'react';
import { AppBar, Card, Collapse, Toolbar, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

type AppPanelProps = {
  panelTitle: string;
  children: ReactNode;
  collapsible?: boolean;
  isExpand?: boolean;
};

export function AppPanel(props: AppPanelProps) {
  const { panelTitle, collapsible, isExpand, children } = props;
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
          className="px-8"
          onClick={handleClick}
          sx={{
            cursor: collapsible ? 'pointer' : undefined
          }}
        >
          <ListIcon className="mr-4" />
          <Typography variant="subtitle1" color="inherit" className="flex-1">
            {panelTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      {(collapsible && <Collapse>{children}</Collapse>) || children}
    </Card>
  );
}
