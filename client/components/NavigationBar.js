import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Red Dice</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/sign-up">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;