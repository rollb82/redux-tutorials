import React from 'react';

export const Header = (props)=>{
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">{props.appName}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
}