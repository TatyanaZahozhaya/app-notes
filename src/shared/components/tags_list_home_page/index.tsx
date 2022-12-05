import React, { FC, memo } from 'react';
import { changeActiveFilter, useAppDispatch } from '@shared';
import './index.scss';

interface ITagsList {
    tags: Array<string> | undefined;
}

export const TagsListHomePage: FC<ITagsList> = memo(({ tags }) => {
    const dispatch = useAppDispatch();

    const renderList = (item: string) => {
        return (
            <li key={item}>
                <button
                    className="tag-homepage-item"
                    onClick={() => dispatch(changeActiveFilter(item))}>
                    {item}
                </button>
            </li>
        );
    };

    if (tags === undefined) {
        return null;
    }

    return <ul className="tags-homepage-box">{tags.map(renderList)}</ul>;
});
