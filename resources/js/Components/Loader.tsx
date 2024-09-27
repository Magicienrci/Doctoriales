// Components/Loader.tsx
import React from 'react';
import '@/Styles/loader.css'; // Custom styles for loader

export default function Loader() {
    return (
        <div className="loader-container">
            <div className="loader"></div>
        </div>
    );
}
