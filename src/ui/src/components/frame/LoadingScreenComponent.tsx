import React from "react";
import "./LoadingScreenComponent.css";

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="cow"></div>
            <div className="loading-text">Loading... </div>
        </div>
    );
};

export default LoadingScreen;
