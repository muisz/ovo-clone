import React from 'react';
import Wrapper from './Wrapper';
import WrapperMain from './WrapperMain';

export default function(props){
    <WrapperMain>
        <Wrapper>
            {props.children}
        </Wrapper>
    </WrapperMain>
}