import { Home } from '@home';
import { CreateNotePage } from '@create_note_page';
import { EditNotePage } from '@edit_note_page';
import { PageNotFound } from '@page_not_found';
import { PageLayout } from '@page_layout';
import { SharedTypes } from '@shared';

export enum Paths {
    HOME = '/',
    PAGE_LAYOUT = '',
    CREATE_NOTE_PAGE = '/create',
    EDIT_NOTE_PAGE = '/edit',
    EDIT_NOTE = '/edit/:id',
    PAGE_NOT_FOUND = '*',
}

export const InnerRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <CreateNotePage />,
        path: Paths.CREATE_NOTE_PAGE,
    },
    {
        element: <EditNotePage />,
        path: Paths.EDIT_NOTE,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];

export const AppRoutes: Array<SharedTypes.IRoute> = [
    {
        element: <Home />,
        path: Paths.HOME,
    },
    {
        element: <PageLayout />,
        path: Paths.PAGE_LAYOUT,
    },
    {
        element: <CreateNotePage />,
        path: Paths.CREATE_NOTE_PAGE,
    },
    {
        element: <EditNotePage />,
        path: Paths.EDIT_NOTE,
    },
    {
        element: <PageNotFound />,
        path: Paths.PAGE_NOT_FOUND,
    },
];
