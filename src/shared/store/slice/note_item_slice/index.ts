import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SharedTypes, Hooks } from '@shared';

export interface INoteItemState {
    noteItem: SharedTypes.INotesListItem;
    noteItemLoadingStatus: 'loading' | 'idle' | 'error';
    error: any;
}

const initialState: INoteItemState = {
    noteItem: {
        id: '',
        name: '',
        text: '',
        tagsFromText: [],
    },
    noteItemLoadingStatus: 'idle',
    error: '',
};

export const addNoteItem = createAsyncThunk(
    'noteItem/addNoteItem',
    async function ({ id, name, text, tagsFromText }: SharedTypes.INotesListItem) {
        const { request } = Hooks.useHttpPostPut();

        return await request(
            'http://localhost:3001/notes',
            'POST',
            JSON.stringify({ id, name, text, tagsFromText }),
        );
    },
);

export const editNoteItem = createAsyncThunk(
    'noteItem/editNoteItem',
    async function ({ id, name, text, tagsFromText }: SharedTypes.INotesListItem) {
        const { request } = Hooks.useHttpPostPut();

        return await request(
            `http://localhost:3001/notes/${id}`,
            'PUT',
            JSON.stringify({ name, text, tagsFromText }),
        );
    },
);

export const getNoteItem = createAsyncThunk('noteItem/getNoteItem', async function (id: string) {
    const { request } = Hooks.useHttp();
    return await request(`http://localhost:3001/notes/${id}`);
});

const noteSlice = createSlice({
    name: 'noteItem',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addNoteItem.pending, (state) => {
                state.noteItemLoadingStatus = 'loading';
            })
            .addCase(addNoteItem.fulfilled, (state, action) => {
                state.noteItemLoadingStatus = 'idle';
                state.noteItem = action.payload;
            })
            .addCase(addNoteItem.rejected, (state, action) => {
                state.noteItemLoadingStatus = 'error';
                state.error = action.payload;
            })
            .addCase(getNoteItem.pending, (state) => {
                state.noteItemLoadingStatus = 'loading';
            })
            .addCase(getNoteItem.fulfilled, (state, action) => {
                state.noteItemLoadingStatus = 'idle';
                state.noteItem = action.payload;
            })
            .addCase(getNoteItem.rejected, (state, action) => {
                state.noteItemLoadingStatus = 'error';
                state.error = action.payload;
            })
            .addCase(editNoteItem.pending, (state) => {
                state.noteItemLoadingStatus = 'loading';
            })
            .addCase(editNoteItem.fulfilled, (state, action) => {
                state.noteItemLoadingStatus = 'idle';
                state.noteItem = action.payload;
            })
            .addCase(editNoteItem.rejected, (state, action) => {
                state.noteItemLoadingStatus = 'error';
                state.error = action.payload;
            });
    },
});

const { reducer } = noteSlice;
export default reducer;
