import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default function(props){
    return (
        <div className="recomendation-card">
            <ul>
                {props.data.map((item, key) => <li key={key}><Link to={item.path}><Card src={item.src} category={item.category} title={item.title} /></Link></li>)}
            </ul>
        </div>
    );
}