import React, { useState, useEffect } from 'react';
import { StyledProps } from '@material-ui/core/styles';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import ButtonBase from '@material-ui/core/ButtonBase';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles<Theme, StyledProps>((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    marginBottom: 80,
  },
  toolbarMain: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  grow: {
    flexGrow: 1,
  },
}));

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}


function Header(props: any) {
    const theme = useTheme();
    const classes = useStyles({} as StyledProps);

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            
            <Toolbar className={classes.toolbarMain}>
                <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap className={classes.grow}>
                {/* <ButtonBase color="inherit" onClick={() => goTo('')}>
                    Contract Builder
                </ButtonBase> */}
                </Typography>
            </Toolbar>
            

            <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
            >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                    <ChevronLeftIcon />
                ) : (
                    <ChevronRightIcon />
                )}
                </IconButton>
            </div>
            <Divider />
            <List>
              <ListItemLink to="/" primary="Home" icon={<MailIcon />}/>
              <ListItemLink to="/contracts" primary="Contracts" icon={<MailIcon />}/>
              <ListItemLink to="/clauses" primary="Clauses" icon={<MailIcon />}/>
              <ListItemLink to="/contractTemplates" primary="Contract Templates" icon={<MailIcon />}/>
              <ListItemLink to="/clauseTemplates" primary="Clause Templates" icon={<MailIcon />}/>
            </List>
            <Divider />
            </Drawer>
        </AppBar>
        </div>
    );
}

export default Header;