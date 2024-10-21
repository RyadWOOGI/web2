import React, { useState } from 'react';

interface ClickCounterProps {
    title: string;
    message: string;
    hoverMessage: string;
}

const ClickCounter = ({ title, message, hoverMessage }: ClickCounterProps) => {
    const [count, setCount] = useState(0);
    const [showHoverMessage, setShowHoverMessage] = useState(false);

    const handleClick = () => {
        setCount((count) => count + 1);
    };

    const handleMouseHoverTrue = () => {
        setShowHoverMessage(true);
    };

    const handleMouseHoverFalse = () => {
        setShowHoverMessage(false);
    }

    return (
        <div className="card">
            <h2>{title}</h2>
            {showHoverMessage && <p>{hoverMessage}</p>}
            <button 
            onClick={handleClick}
            onMouseEnter={handleMouseHoverTrue}
            onMouseLeave={handleMouseHoverFalse}
            >
                count is {count}
            </button>
            {count >= 10 && <p>{message}</p>}
        </div>
    );
};

export default ClickCounter;