import React, { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    IAppState,
    SharedComponents,
    SharedTypes,
    useAppDispatch,
    editNoteItem,
    getNoteItem,
} from '@shared';

export const EditNoteForm: FC<SharedTypes.IDataNoteID> = memo(({ id }) => {
    const { noteItem, noteItemLoadingStatus, error } = useSelector(
        (state: IAppState) => state.noteItem,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNoteItem(id));
    }, []);

    if (noteItemLoadingStatus === 'loading') {
        return <SharedComponents.WarningMessage text="Loading..." />;
    }
    if (error) {
        return <SharedComponents.WarningMessage text="Error... Please, try later." />;
    }

    const { name, text, tagsFromText } = noteItem;

    return (
        <SharedComponents.NoteForm
            name={name}
            text={text}
            id={id}
            tagsFromText={tagsFromText}
            fn={editNoteItem}
        />
    );
});
