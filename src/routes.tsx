import React from 'react';
import {Routes, Route} from 'react-router-dom';

//import all pages
import Home from './components/pages/home/home';

export default function AllRoutes():React.ReactElement {

    return (
        <Routes>
            {getRoutes()}
        </Routes>
    );

    function getRoutes():React.ReactElement[] {

        const pages:Record<string, React.ReactElement> = {
            home: <Home/>,
        };

        let routesHTML:React.ReactElement[] = [];

        //make the default route
        routesHTML.push(
            <Route path="/" element={pages.home} />
        );

        //make all other routes
        for (let page in pages) {

            if (page !== 'home') {
                routesHTML.push(
                    <Route path={'/'+page} element={pages[page]} />
                );
            };
        };

        return routesHTML;
    };
};