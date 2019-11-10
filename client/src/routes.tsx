import React, {useContext} from 'react';
import { Home, Notifications, AccountCircle } from '@material-ui/icons';

import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import CompanyView from './containers/CompanyView'
import InfoPage from './components/InfoPage'

const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        navbarName: 'Home',
        icon: Home,
        component: CompanyView,
    },
    {
        path: '/profile',
        sidebarName: 'Profile',
        navbarName: 'Profile',
        icon: AccountCircle,
        component: Profile,
    },
    {
        path: '/info/:companyId',
        sidebarName: 'info',
        navbarName: 'info',
        icon: AccountCircle,
        component: InfoPage
    },

];

export default Routes;
