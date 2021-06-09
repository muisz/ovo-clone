import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function(props){
    return (
        <div className={props.active ? "box-icon-nav box-icon-nav-active" : "box-icon-nav"}>
            <div className="icon-nav">
                <Icon name={props.icon} size="large" />
            </div>
            <span className="text-nav">
                {props.title}
            </span>
        </div>
    );
}