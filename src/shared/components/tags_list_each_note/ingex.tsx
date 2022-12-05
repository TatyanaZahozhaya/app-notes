import React, { FC, memo } from 'react';
import './index.scss';

interface ITagsList {
    tags: Array<string> | undefined;
}

export const TagsListEachNote: FC<ITagsList> = memo(({ tags }) => {
    if (tags === undefined) {
        return null;
    }
    return <ul className="tags-note-box">{tags.map(renderList)}</ul>;
});

const renderList = (item: string) => {
    return (
        <li
            className="tags-note-item"
            key={item}>
            {item}
        </li>
    );
};
