import React from 'react';
import { Link } from 'react-router-dom';
import codemindLogo from './Codemind-Logo.png';

const Logo = () => {
    return (
        <div style={{ marginBottom: '0' }}>
            <Link to="/">
                <img 
                    src={codemindLogo} 
                    alt="Codemind Logo" 
                    height={50} 
                />
            </Link>
        </div>
    );
}

export default Logo;
