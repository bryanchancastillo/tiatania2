import React, { Component, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './custom.scss';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <>
                <ScrollToTop />
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
            </>
        );
    }
}
