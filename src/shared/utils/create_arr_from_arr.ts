import { SharedTypes } from '@shared';

export const createArrFromArr = (arr: Array<SharedTypes.INotesListItem>) => {
    const itemsWithTags = arr.filter((item) =>
        item.tagsFromText ? item.tagsFromText.length > 0 : null,
    );
    const allTagsFromNotes = itemsWithTags.map((item) =>
        item.tagsFromText && item.tagsFromText.length ? item.tagsFromText.join(',') : '',
    );

    return Array.from(new Set(allTagsFromNotes.join(',').split(',')));
};
