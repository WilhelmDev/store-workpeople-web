import React from 'react';
import { ListSubheader, styled, Theme } from '@mui/material';

type NavGroup = {
  navlabel?: boolean;
  subheader?: string;
};

interface NavGroupProps {
  item: NavGroup;
}

const NavGroup: React.FC<NavGroupProps> = ({ item }) => {
  const ListSubheaderStyle = styled((props: React.ComponentProps<typeof ListSubheader>) => (
    <ListSubheader disableSticky {...props} />
  ))(({ theme }) => ({
    ...theme.typography.overline,
    fontWeight: '700',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0),
    color: theme.palette.text.primary,
    lineHeight: '26px',
    padding: '3px 12px',
  }));
  return (
    <ListSubheaderStyle>{item.subheader}</ListSubheaderStyle>
  );
};

export default NavGroup;
