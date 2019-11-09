import { createContext } from 'react';
import {decorate, observable, computed} from 'mobx';

export class MainStoreObject {
    drawerToggled = false;

    toggleDrawer = () => {
        this.drawerToggled = !(this.drawerToggled);
    }

    setDrawer = (status : boolean) => {
        this.drawerToggled = status;
    }
}

decorate(MainStoreObject, {
    drawerToggled: observable
});


export default createContext(new MainStoreObject())

