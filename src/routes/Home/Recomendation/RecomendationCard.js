import React from 'react';
import Card from './Card';

export default function(props){
    return (
        <div className="recomendation-card">
            <ul>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
            </ul>
        </div>
    );
}