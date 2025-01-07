import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext'; // Importiamo il contesto del tema
import './SideBarComponent.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
    const { theme, toggleTheme } = useTheme(); // Ottieni il tema attuale e la funzione di toggle
    const { logout } = useAuth();
    const [isExpanded, setIsExpanded] = useState(false); // Gestione dello stato di espansione

    const toggleSidebar = () => setIsExpanded(!isExpanded);

    const nav = useNavigate();

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isExpanded ? '«' : '»'}
            </button>
            {/*<div className="sidebar-logo">{isExpanded ? (theme === 'dark' ? 'MyApp (Dark)' : 'MyApp (Light)') : (
                <img src='https://avatars.githubusercontent.com/u/23747925?s=280&v=4' />
            )}</div>*/}
            <div className="sidebar-menu">
                <button onClick={() => nav('/mail')} className="sidebar-item">
                    📧 {isExpanded && 'Mail'}
                </button>
                <button onClick={() => nav('/calendar')} className="sidebar-item">
                    📅 {isExpanded && 'Calendario'}
                </button>
                <button onClick={() => nav('/contacts')} className="sidebar-item">
                    👥 {isExpanded && 'Contatti'}
                </button>
            </div>
            <div className="sidebar-footer">
                <button className="sidebar-item" onClick={toggleTheme}>
                    {theme === 'dark' ? '🌞' : '🌙'} {isExpanded && (theme === 'dark' ? 'Light Mode' : 'Dark Mode')}
                </button>
                <button className="sidebar-item" onClick={logout}>
                    🚪 {isExpanded && 'Logout'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
