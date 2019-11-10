import React, {useContext} from 'react';
import { Home, Notifications, AccountCircle } from '@material-ui/icons';

import LoginButton from './components/LoginButton';
import Profile from './components/Profile';

const Routes = [
    {
        path: '/',
        sidebarName: 'home',
        navbarName: 'home',
        icon: Home,
        component: LoginButton,
    },
    {
        path: '/profile',
        sidebarName: 'profile',
        navbarName: 'profile',
        icon: AccountCircle,
        component: Profile,
    }
];

export default Routes;
