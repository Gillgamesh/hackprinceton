import React, {useContext} from 'react';
import { Home, Notifications, AccountCircle } from '@material-ui/icons';

import LoginButton from './components/LoginButton';

const Routes = [

    {
        path: '/',
        sidebarName: 'home',
        navbarName: 'home',
        icon: Home,
        component: LoginButton,
    }
];

export default Routes;
