import React, { FC, memo } from 'react';

interface ITextAreaField {
    placeholder?: string;
    ariaLabel: string;
    value?: string;
    onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    className?: string;
    rows?: number;
    id?: string;
}

export const TextareaField: FC<ITextAreaField> = memo(
    ({ placeholder, value, onChange, ariaLabel, className, id }) => {
        return (
            <textarea
                placeholder={placeholder}
                aria-label={ariaLabel}
                value={value}
                onChange={onChange}
                className={className}
                id={id}></textarea>
        );
    },
);
