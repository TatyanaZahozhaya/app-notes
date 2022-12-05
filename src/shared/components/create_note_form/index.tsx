import React from 'react';
import { SharedComponents, addNoteItem, Utils } from '@shared';

export const CreateNoteForm = () => {
    let id = Utils.createId();

    return (
        <SharedComponents.NoteForm
            name=""
            text=""
            id={id}
            fn={addNoteItem}
        />
    );
};
