import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paths, SharedComponents } from '@shared';
import './index.scss';
import AddIcon from '../icons/add_icon.png';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <SharedComponents.FilterForm />
            <SharedComponents.NotesList />
            <SharedComponents.Button
                ariaLabel="Add new note"
                src={AddIcon}
                onClick={() => navigate(`${Paths.CREATE_NOTE_PAGE}`)}
                className="add-note-button"
            />
        </>
    );
};
