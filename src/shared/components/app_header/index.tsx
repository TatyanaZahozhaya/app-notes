import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '@shared';
import './index.scss';

export const AppHeader = () => {
    return (
        <header>
            <Link
                className="header-logo"
                to={Paths.HOME}>
                Natatki
            </Link>
        </header>
    );
};
