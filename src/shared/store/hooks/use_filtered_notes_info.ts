import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { IAppState } from '@shared';

export const useFilteredNoteInfo = () => {
    const filteredNoteSelector = createSelector(
        (state: IAppState) => state.filter.activeFilter,
        (state: IAppState) => state.notesList.notesList,
        (filter, note) => {
            if (filter === '') {
                return note;
            } else {
                return note.filter((item) => item.tagsFromText?.some((i) => i.includes(filter, 0)));
            }
        },
    );

    const filteredNotesInformation = useSelector(filteredNoteSelector);
    return filteredNotesInformation;
};
