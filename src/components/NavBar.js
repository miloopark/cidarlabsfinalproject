import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <div class="nav">
                <a href="#research" class="active">Research Timeline</a>
                <a href="#summary">Summary</a>
                <a href="#outreach">Outreach</a>
                <a href="#work">Working At Boston University</a>
            </div>
        </nav>
    );
}

export default NavBar;
