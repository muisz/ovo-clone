import React from 'react';
import { Link } from 'react-router-dom';
import IconNav from './IconNav';

export default function(props){
    const navs = [
        {
            title: "Home",
            icon: "home",
            key: "home",
            path: "#"
        },
        {
            title: "Deals",
            icon: "tags",
            key: "deals",
            path: "#"
        },
        {
            title: "Scan",
            icon: "camera",
            key: "scan",
            path: "#"
        },
        {
            title: "Finance",
            icon: "money",
            key: "finance",
            path: "#"
        },
        {
            title: "Profile",
            icon: "user circle",
            key: "profile",
            path: "#"
        }
    ]

    return (
        <ul className="list-icon-nav">
            {/* <li><IconNav active title="Home" icon="home" /></li>
            <li><IconNav title="Deals" icon="tags" /></li>
            <li><IconNav title="Scan" icon="camera" /></li>
            <li><IconNav title="Finance" icon="money" /></li>
            <li><IconNav title="Profile" icon="user circle" /></li> */}
            {navs.map(nav => <li key={nav.key}><Link to={nav.path}><IconNav title={nav.title} icon={nav.icon} active={nav.key === props.activeNav ? true : false} /></Link></li>)}
        </ul>
    );
}