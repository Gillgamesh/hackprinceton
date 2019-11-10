import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {List, ListItemIcon, ListItemText, Divider, IconButton, MenuList, MenuItem, Drawer } from '@material-ui/core';
import Routes from '../../routes';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listText: {
    color: '#000'
  },
}
)
);

export default function HeaderDrawer({open, setOpen} : any) {
    const classes = useStyles();

    function handleDrawerOpen() {
        return (event: React.KeyboardEvent | React.MouseEvent) => {
            setOpen(true);
        }
    }
    function handleDrawerClose(){
        return (event: React.KeyboardEvent | React.MouseEvent) => {
            setOpen(false);
        }
    }

    return (
        <SwipeableDrawer
            className={classes.list}
            anchor="left"
            open={open}
            onClose={handleDrawerClose()}
            onOpen={handleDrawerOpen()}
        >
        <div
            onClick={handleDrawerClose()}
            role="presentation"
            className={classes.list} >
                <MenuList>
                {Routes.map((prop, key) => {
                  return (
                    <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                      <MenuItem>
                        <ListItemIcon>
                          <prop.icon />
                        </ListItemIcon>
                        <ListItemText className={classes.listText} primary={prop.sidebarName} />
                      </MenuItem>
                    </Link>
                  )})}
              </MenuList>
            <Divider />
        </div>
        </SwipeableDrawer>
    );
}
