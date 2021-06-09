import React from 'react';

export default function(props){
    return (
        <div className="card">
            <div>
                <img src={props.src} />
            </div>
            <p className="card-category">{props.category}</p>
            <h5>{props.title}</h5>
        </div>
    );
}