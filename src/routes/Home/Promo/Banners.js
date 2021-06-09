import React from 'react';
import Banner from './Banner';

export default function(props){
    return (
        <div className="banners-wrapper">
            <ul className="banners">
                {props.data.map((item, key) => <li key={key}><Banner src={item.src} path={item.path} /></li>)}
            </ul>
        </div>
    );
}