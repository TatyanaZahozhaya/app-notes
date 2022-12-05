import { createSlice } from '@reduxjs/toolkit';

export interface IFilterState {
    activeFilter: string;
}

const initialState: IFilterState = {
    activeFilter: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
    },
});

const { actions, reducer } = filterSlice;
export default reducer;
export const { changeActiveFilter } = actions;
