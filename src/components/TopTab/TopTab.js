import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import Tabs from './Tabs';
import './TopTab.css';

export default function(props){
    return (
        <div className="top-tab">
            <div className="tab-title">
                <span><Link to={props.backTo}><Icon name="arrow left" size="large" /></Link></span>
                <h5>{props.title}</h5>
            </div>
            <Tabs tabs={props.tabs} active={props.active} tabOnChange={props.tabOnChange} />
        </div>
    )
}