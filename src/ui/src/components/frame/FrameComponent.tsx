import React from 'react';
import Sidebar from './SideBarComponent';
import './FrameComponent.css';

const FrameComponent = ({ children }: { children: React.ReactNode}) => {
    return (
        <div className="frame">
            <Sidebar />
            <div className="frame-content">{children}</div>
        </div>
    );
};

export default FrameComponent;
