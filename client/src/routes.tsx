import React, {useContext} from 'react';
import { Home, Notifications, AccountCircle } from '@material-ui/icons';

const Routes = [

    {
        path: '/',
        sidebarName: 'home',
        navbarName: 'home',
        icon: Home,
        component: () => <div> bruh </div>,},
];

export default Routes;
