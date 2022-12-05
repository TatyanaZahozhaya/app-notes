import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SharedComponents, SharedTypes, useAppDispatch, Paths, deleteNote } from '@shared';
import './index.scss';
import EditIcon from '../../../icons/edit_icon.png';
import DeleteIcon from '../../../icons/delete_icon.png';

export const NotesListItem: FC<SharedTypes.INotesListItem> = memo(({ name, id }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onDeleteNote = (e: React.PointerEvent<HTMLButtonElement>): void => {
        let data = e.currentTarget.dataset.noteid;
        if (data) dispatch(deleteNote(data));
    };

    const onEditNote = (e: React.PointerEvent<HTMLButtonElement>): void => {
        let data = e.currentTarget.dataset.noteid;
        navigate(`${Paths.EDIT_NOTE_PAGE}/${data}`);
    };

    return (
        <li className="note-list-item">
            <span className="note-list-item-name">{name}</span>
            <div className="note-list-item-button-box">
                <SharedComponents.Button
                    ariaLabel="Remove note from list"
                    src={DeleteIcon}
                    id={id}
                    onClick={onDeleteNote}
                    className="notes-list-item-button"
                />
                <SharedComponents.Button
                    ariaLabel="Edit note"
                    src={EditIcon}
                    id={id}
                    onClick={onEditNote}
                    className="notes-list-item-button"
                />
            </div>
        </li>
    );
});
