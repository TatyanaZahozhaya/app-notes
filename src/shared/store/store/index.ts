import { configureStore, combineReducers } from '@reduxjs/toolkit';

import notesList, { type INotesListState } from '../slice/notes_list_slice';
import noteItem, { type INoteItemState } from '../slice/note_item_slice';
import filter, {type  IFilterState} from '../slice/filter_slice'

export interface IAppState {
    notesList: INotesListState;
    noteItem: INoteItemState;
    filter: IFilterState;
}

const rootReducer = combineReducers({
    notesList,
    noteItem,
    filter
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
