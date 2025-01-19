import React from 'react';
import Sidebar from './SideBarComponent';
import './CalFrameComponent.css';
import { CalSideBarComponent } from '../cal/CalSideBarComponent';

const CalFrameComponent = ({ children }: { children: React.ReactNode}) => {
    return (
        <div className="frame">
            <CalSideBarComponent />
            <div className="frame-content">{children}</div>
        </div>
    );
};

export default CalFrameComponent;
