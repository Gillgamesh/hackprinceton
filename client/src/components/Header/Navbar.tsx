import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// @ts-ignore
import {useBlockstack} from 'react-blockstack';



const useStyles = makeStyles(
    (theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),

        },
        title: {
            flexGrow: 1,
        }
    })
);

export default function HeaderNav({toggleDrawer} : any) {
    const classes = useStyles();
    const {signIn, signOut, person} = useBlockstack();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleMenu(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    function isLoggedIn() {
        return person != null;
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start"
                        className = {classes.menuButton}
                        onClick = {toggleDrawer}
                        color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        JOBd
                    </Typography>
                        <div>
                            <IconButton
                                aria-label="Account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                    horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                    horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={signIn || signOut}>
                                    {signIn ? "Sign In" : 
                                        signOut ? "Sign Out":
                                    "Pending..."}
                                        </MenuItem>
                            {/* { person && (<MenuItem onClick={handleClose}>My account</MenuItem> */}
                            {/* ) */}
                            {/* } */}
                        </Menu>
                    </div>
        </Toolbar>
    </AppBar>
</div>
    )



}
