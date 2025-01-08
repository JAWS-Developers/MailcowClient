import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext'; // Importiamo il contesto del tema
import './SideBarComponent.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
    const { theme, toggleTheme } = useTheme(); // Ottieni il tema attuale e la funzione di toggle
    const { logout } = useAuth();
    const [isExpanded, setIsExpanded] = useState(false); // Gestione dello stato di espansione
    const [expandedSubGroup, setExpandedSubGroup] = useState("/mail");

    const toggleSidebar = () => setIsExpanded(!isExpanded);

    const nav = useNavigate();

    const handleSideBarNavigation = (path: string) => {
        setExpandedSubGroup(path);
        nav(path);
    }

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isExpanded ? '«' : '»'}
            </button>
            {/*<div className="sidebar-logo">{isExpanded ? (theme === 'dark' ? 'MyApp (Dark)' : 'MyApp (Light)') : (
                <img src='https://avatars.githubusercontent.com/u/23747925?s=280&v=4' />
            )}</div>*/}
            <div className="sidebar-menu">
                <div className="sidebar-item-group">
                    <button onClick={() => handleSideBarNavigation('/mail')} className="sidebar-item">
                        📧 {isExpanded && 'Mail'}
                    </button>
                    {(expandedSubGroup === "/mail" && isExpanded) && (
                        <div className="subitem-group">
                            <button onClick={() => nav('/mail')} className="sidebar-item">
                                bho
                            </button>
                        </div>
                    )}

                </div>
                <div className="sidebar-item-group">
                    <button onClick={() => handleSideBarNavigation('/calendar')} className="sidebar-item">
                        📅 {isExpanded && 'Calendario'}
                    </button>
                    {(expandedSubGroup === "/calendar" && isExpanded) && (
                        <div className="subitem-group">
                            <label className="sidebar-checkbox-container">
                                <span className="sidebar-checkbox-label">Attiva/Disattiva Calendario</span>
                                <input type="checkbox" className="sidebar-checkbox" />
                            </label>
                        </div>
                    )}
                </div>
                <div className="sidebar-item-group">
                    <button onClick={() => handleSideBarNavigation('/contacts')} className="sidebar-item">
                        👥 {isExpanded && 'Contatti'}
                    </button>
                    {(expandedSubGroup === "/mail" && isExpanded) && (
                        <div className="subitem-group">
                            <button onClick={() => nav('/mail')} className="sidebar-item">
                                bho
                            </button>
                        </div>
                    )}
                </div>
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
