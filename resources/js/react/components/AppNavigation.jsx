import React from "react";
import {AppLink, NavigationMenu} from '@shopify/app-bridge/actions';
import {useAppBridge} from '@shopify/app-bridge-react';
import {useLocation} from 'react-router-dom';

function AppNavigation() {
    const app = useAppBridge();

    const location = useLocation();

    const home = AppLink.create(app, {
        label: 'Home',
        destination: '/',
    });

    const example = AppLink.create(app, {
        label: 'Example',
        destination: '/example',
    });

    const scripts = AppLink.create(app, {
        label: 'Scripts',
        destination: '/scripts'
    });

    const navigationMenu = NavigationMenu.create(app, {
        items: [home, example, scripts],
    });

    switch (location.pathname) {
        case "/":
            navigationMenu.set({active: home});
            break;
        case "/example":
            navigationMenu.set({active: example});
            break;
        case "/scripts":
            navigationMenu.set({active: scripts});
            break;
        default:
            navigationMenu.set({active: undefined});
    }

    return null
}

export default AppNavigation;
