import React from 'react';
import { Link } from 'react-router-dom';

export default function(props){
    return (
        <div className="banner">
            <Link to={props.path}><img src={props.src} /></Link>
        </div>
    );
}