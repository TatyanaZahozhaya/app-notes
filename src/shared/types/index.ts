export interface IRoute {
    element: React.ReactElement;
    path: string;
}

export interface INotesListItem {
    id: string;
    name?: string;
    text?: string;
    tagsFromText?: Array<string>;
}

export interface IDataNoteID {
    id: string;
}

export interface INoteForm extends INotesListItem {
    fn: any;
}

