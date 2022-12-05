import React from 'react';
import { useParams } from 'react-router-dom';
import { SharedComponents } from '@shared';

export const EditNotePage = () => {
    const { id } = useParams();

    if (!id) {
        return <SharedComponents.WarningMessage text="Not found" />;
    }

    return (
        <div>
            <SharedComponents.EditNoteForm id={id} />
        </div>
    );
};
