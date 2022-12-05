import React from 'react';
import { useSelector } from 'react-redux';
import { SharedComponents, useAppDispatch, changeActiveFilter, IAppState } from '@shared';
import './index.scss';

export const FilterForm = () => {
    const { activeFilter } = useSelector((state: IAppState) => state.filter);
    const dispatch = useAppDispatch();

    return (
        <form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
            <SharedComponents.TextInputField
                className="tag-search-panel-field"
                placeholder="Find a tag in the list..."
                ariaLabel="filter"
                value={activeFilter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(changeActiveFilter(e.target.value.toLowerCase()))
                }
            />
        </form>
    );
};
