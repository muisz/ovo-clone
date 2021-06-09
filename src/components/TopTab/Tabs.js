import React from 'react';
import { Grid } from 'semantic-ui-react';

export default function(props){
    return (
        <div className="tabs">
            {props.tabs.map(tab => <div key={tab.key} className={tab.key === props.active ? "tab tab-active" : "tab"} onClick={() => props.tabOnChange(tab.key)}>{tab.title}</div>)}
        </div>
    );
}