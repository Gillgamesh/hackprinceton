import ReactBlockstack from 'react-blockstack';
import {AppConfig} from 'blockstack';

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const getUserSession = (() => ReactBlockstack({appConfig}));
