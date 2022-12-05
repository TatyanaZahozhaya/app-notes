import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SharedTypes, Hooks } from '@shared';

export interface INotesListState {
    notesList: Array<SharedTypes.INotesListItem>;
    notesListLoadingStatus: 'loading' | 'idle' | 'error';
    error: any;
}

const initialState: INotesListState = {
    notesList: [],
    notesListLoadingStatus: 'idle',
    error: '',
};

export const fetchNotesList = createAsyncThunk('notesList/fetchNotesList', async function () {
    const { request } = Hooks.useHttp();
    return await request('http://localhost:3001/notes');
});
export const deleteNote = createAsyncThunk('notesList/deleteNote', async function (id: string) {
    const { request } = Hooks.useHttp();
    await request(`http://localhost:3001/notes/${id}`, 'DELETE');
    return await request('http://localhost:3001/notes');
});

const notesListSlice = createSlice({
    name: 'notesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotesList.pending, (state) => {
                state.notesListLoadingStatus = 'loading';
            })
            .addCase(fetchNotesList.fulfilled, (state, action) => {
                state.notesListLoadingStatus = 'idle';
                state.notesList = action.payload;
            })
            .addCase(fetchNotesList.rejected, (state, action) => {
                state.notesListLoadingStatus = 'error';
                state.error = action.payload;
            })
            .addCase(deleteNote.pending, (state) => {
                state.notesListLoadingStatus = 'loading';
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.notesListLoadingStatus = 'idle';
                state.notesList = action.payload;
            })
            .addCase(deleteNote.rejected, (state, action) => {
                state.notesListLoadingStatus = 'error';
                state.error = action.payload;
            });
    },
});

const { reducer } = notesListSlice;
export default reducer;
