import React, { Component } from 'react';
import Wrapper from '../../layouts/Wrapper';
import WrapperWithFooter from '../../layouts/WrapperWithFooter';
import Highlight from './Highlight/Highlight';
import Promo from './Promo/Promo';
import Recomendation from './Recomendation/Recomendation';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <WrapperWithFooter
                activeNav="home"
            >
                <Highlight />
                <Promo />
                <Recomendation />
            </WrapperWithFooter>
        );
    }
}
 
export default Home;