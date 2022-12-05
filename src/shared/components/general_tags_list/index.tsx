import React, { FC, memo } from 'react';
import { SharedComponents, SharedTypes, Utils } from '@shared';

interface IGeneralTagsList {
    arr: Array<SharedTypes.INotesListItem>;
}

export const GeneralTagsList: FC<IGeneralTagsList> = memo(({ arr }) => {
    const newTagsArr = Utils.createArrFromArr(arr);

    return <SharedComponents.TagsListHomePage tags={newTagsArr} />;
});
