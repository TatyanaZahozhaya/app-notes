import React from 'react';
import { Outlet } from 'react-router-dom';
import { SharedComponents } from '@shared';
import './index.scss';

export const PageLayout = () => {
    return (
        <>
            <SharedComponents.AppHeader />
            <main>
                <Outlet />
            </main>
            <SharedComponents.AppFooter />
        </>
    );
};
