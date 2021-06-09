import React from 'react';
import { FcFlashOn } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function(props){
    return (
        <div className="fitur-item">
            <div className="fitur-icon">
                <Link to={props.path}><props.icon size={40} /></Link>
            </div>
            <p>{props.title}</p>
        </div>
    );
}