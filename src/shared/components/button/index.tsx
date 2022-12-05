import React, { FC, memo } from 'react';
import './index.scss';

interface IButton {
    id?: string;
    ariaLabel: string;
    text?: string;
    onClick?(e?: React.MouseEvent): void;
    className?: string;
    src?: string;
}

export const Button: FC<IButton> = memo(({ id, ariaLabel, text, onClick, className, src }) => {
    return (
        <button
            data-noteid={id}
            aria-label={ariaLabel}
            onClick={onClick}
            className={className}>
            {text ? <span>{text}</span> : null}
            {src ? (
                <img
                    className="button-icon"
                    src={src}
                    alt={ariaLabel}
                />
            ) : null}
        </button>
    );
});
