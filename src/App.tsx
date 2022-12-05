import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InnerRoutes, Paths, SharedTypes } from '@shared';

import './App.scss';

import { PageLayout } from '@page_layout';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        key={Paths.PAGE_LAYOUT}
                        element={<PageLayout />}>
                        {InnerRoutes.map(renderRoutes)}
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

const renderRoutes = ({ element, path }: SharedTypes.IRoute): React.ReactElement => {
    return (
        <Route
            element={element}
            path={path}
            key={path}
        />
    );
};

export default App;
