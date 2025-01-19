import React from 'react';
import Sidebar from './SideBarComponent';
import './MainFrameComponent.css';

const MainFrameComponent = ({ children }: { children: React.ReactNode}) => {
    return (
        <div className="frame">
            <Sidebar />
            <div className="frame-content">{children}</div>
        </div>
    );
};

export default MainFrameComponent;
