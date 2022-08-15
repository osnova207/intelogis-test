import React, { useState } from 'react';
import './split-view.scss';

const SplitView = ({ leftComponent, rightComponent }) => {
    const [leftZoneWidth, setLeftZoneWidth] = useState(() => (window.innerWidth / 2) - 20);
    const [startCursorPosition, setStartCursorPosition] = useState(0);
    const [isDrag, setDrag] = useState(false);

    const handleMouseDown = (e) => {
        setDrag(true);
        setStartCursorPosition(e.clientX);
    };

    const handleMouseUp = () => {
        if (isDrag) setDrag(false);
    };

    const handleMouseMove = (e) => {
        if (isDrag) {
            e.preventDefault();
            e.stopPropagation();

            const currentCursorPosition = e.clientX;
            const offset = startCursorPosition - leftZoneWidth;
            setLeftZoneWidth(currentCursorPosition - offset);
            setStartCursorPosition(currentCursorPosition)
        }
    };

    return (
        <div
            className='SplitView'
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className='SplitView__left-zone' style={{ width: leftZoneWidth }}>
                {leftComponent || null}
            </div>
            <div className='SplitView__divider' onMouseDown={handleMouseDown} />
            <div className='SplitView__right-zone'>
                {rightComponent || null}
            </div>
        </div>
    )
};

export default SplitView;
