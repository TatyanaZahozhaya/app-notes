import { FC, useState, memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SharedComponents, useAppDispatch, Paths, Utils, SharedTypes } from '@shared';
import './index.scss';

export const NoteForm: FC<SharedTypes.INoteForm> = memo(({ id, name, text, fn, tagsFromText }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [noteName, setNoteName] = useState(name);
    const [noteText, setNoteText] = useState(text);
    const [textTags, setTextTags] = useState(tagsFromText);

    useEffect(() => {
        Utils.resizeTextArea();
    }, []);

    const nameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setNoteName(e.target.value);
    };

    const textChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const text = e.target.value;
        if (text) {
            setTextTags(Utils.chooseTags(text));
            setNoteText(text);
        }
    };

    const rejectChanges = (e: React.MouseEvent): void => {
        e.preventDefault();
        setNoteName(name);
        setNoteText(text);
    };

    const saveChanges = (e: React.MouseEvent): void => {
        e.preventDefault();
        dispatch(
            fn({
                id: id,
                name: noteName,
                text: noteText,
                tagsFromText: textTags,
            }),
        );
        navigate(`${Paths.EDIT_NOTE_PAGE}/${id}`);
    };

    return (
        <form className="note-form">
            <SharedComponents.TextareaField
                ariaLabel="field with name of the note "
                value={noteName}
                onChange={nameChange}
                placeholder="enter note name"
                className="note-form-textarea-field"
            />

            <SharedComponents.TextareaField
                ariaLabel="field with  description of the note"
                value={noteText}
                onChange={textChange}
                placeholder="enter description"
                className="note-form-textarea-field"
                id="text-area-to-highlight"
            />

            <SharedComponents.TagsListEachNote tags={textTags} />

            <div className="note-form-button-box">
                <SharedComponents.Button
                    ariaLabel="reject changes button"
                    text="Undo"
                    onClick={rejectChanges}
                    className="note-form-button"
                />
                <SharedComponents.Button
                    ariaLabel="save note button"
                    text="Save"
                    onClick={saveChanges}
                    className="note-form-button"
                />
                <Link
                    className="note-form-button"
                    to={Paths.HOME}>
                    Home
                </Link>
            </div>
        </form>
    );
});
