import React, { FC, memo } from 'react';

interface ITextInputField {
    label?: string;
    placeholder?: string;
    ariaLabel: string;
    value?: string;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    className?: string;
}

export const TextInputField: FC<ITextInputField> = memo(
    ({ label, placeholder, value, onChange, ariaLabel, className }) => {
        return (
            <label>
                {label}
                <input
                    type="text"
                    placeholder={placeholder}
                    aria-label={ariaLabel}
                    value={value}
                    onChange={onChange}
                    className={className}
                />
            </label>
        );
    },
);
