import React, {useContext} from 'react';

import {observer} from 'mobx-react';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import MainStore from './MainStore';

import Navbar from './components/Header/Navbar';
import Drawer from './components/Header/Drawer';

import Routes from './routes';


//visual
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import outerTheme from './themes/Theme';

const App = observer( () => {
    const store = useContext(MainStore);
    return (
        <MuiThemeProvider theme={outerTheme}>
            <Router>
                <Navbar toggleDrawer = {store.toggleDrawer} />
                <Drawer open= {store.drawerToggled}
                    setOpen = {store.setDrawer}/>
                    {Routes.map((prop, key) => <Route path={prop.path} key={key} component={prop.component} /> )}
            </Router>
        </MuiThemeProvider>
    );
});
export default App;
