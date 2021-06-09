import React from 'react';
import ListIconNav from './ListIconNav';
import Wrapper from './Wrapper';
import WrapperMain from './WrapperMain';

export default function(props){
    return (
        <WrapperMain>
            <Wrapper>
                {props.children}
            </Wrapper>
            <div className="footer">
                {/* <div className="wrapper-none"></div> */}
                <div className="wrapper-footer">
                    <ListIconNav activeNav={props.activeNav} />
                </div>
            </div>
        </WrapperMain>
    );
}