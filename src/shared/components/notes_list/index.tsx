import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SharedComponents, SharedTypes, IAppState, fetchNotesList, useAppDispatch, Hooks} from '@shared';
import './index.scss';

export const NotesList = () => {
    const { notesList, notesListLoadingStatus, error } = useSelector(
        (state: IAppState) => state.notesList,
    );
    const dispatch = useAppDispatch();

    const filteredNotesInformation = Hooks.useFilteredNoteInfo()

    useEffect(() => {
        dispatch(fetchNotesList());
    }, [dispatch]);

    if (notesListLoadingStatus === 'loading') {
        return  <SharedComponents.WarningMessage text='Loading...'/>
    }

    if (error) {
        return <SharedComponents.WarningMessage text='Error... Please, try later.'/>
    }
    
    return (
        <div className='notes-list'>
            <ul>{filteredNotesInformation.map(renderNotesList)}</ul>
            <SharedComponents.GeneralTagsList arr={notesList} />
        </div>
    );
};

const renderNotesList = ({ id, text, tagsFromText, name }: SharedTypes.INotesListItem) => {
    return (
        <SharedComponents.NotesListItem
            key={id}
            id={id}
            text={text}
            tagsFromText={tagsFromText}
            name={name}
        />
    );
};
