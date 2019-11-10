import React, {useContext} from 'react';
import { Home, Notifications, AccountCircle } from '@material-ui/icons';

import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import CompanyView from './containers/CompanyView'
import InfoPage from './components/InfoPage'

const Routes = [
    {
        path: '/',
        sidebarName: 'home',
        navbarName: 'home',
        icon: Home,
        component: CompanyView,
    },
    {
        path: '/profile',
        sidebarName: 'profile',
        navbarName: 'profile',
        icon: AccountCircle,
        component: Profile,
    },
     {
        path: '/InfoPage',
        sidebarName: 'info',
        navbarName: 'info',
        icon: AccountCircle,
        component: InfoPage

    },

];

export default Routes;
