export { useAppDispatch } from './app/hooks';
export {
    addNoteItem,
    editNoteItem,
    getNoteItem,
    fetchNotesList,
    deleteNote,
    changeActiveFilter,
} from './slice';
export { store, type IAppState } from './store';
