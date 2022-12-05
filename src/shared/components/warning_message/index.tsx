import React, { FC, memo } from 'react';
import './index.scss';

interface IWarningMessage {
    text: string;
}

export const WarningMessage: FC<IWarningMessage> = memo(({ text }) => {
    return <div className="warning-message">{text}</div>;
});
