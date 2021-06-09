import React from 'react';
import ListIconNav from './ListIconNav';
import Wrapper from './Wrapper';

export default function(props){
    return (
        <Wrapper>
            {props.children}
            <div className="wrapper-none"></div>
            <div className="wrapper-footer">
                <ListIconNav activeNav={props.activeNav} />
            </div>
        </Wrapper>
    );
}