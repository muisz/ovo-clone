import React, { Component } from 'react';
import TopTab from '../../../components/TopTab/TopTab';
import MainContainer from '../../../layouts/MainContainer';
import InstanTopUpTab from './InstanTopUpTab';
import MetodeLainTab from './MetodeLain';
import './TopUp.css';

class TopUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    title: "Instan Top Up",
                    component: InstanTopUpTab,
                    key: "topup"
                },
                {
                    title: "Metode Lain",
                    component: MetodeLainTab,
                    key: "metode"
                }
            ],
            active: "topup"
        }
    }

    tabOnChange = (key) => {
        this.setState({ active: key });
    }

    render() { 
        return (
            <MainContainer>
                <TopTab 
                    tabs={this.state.tabs} 
                    active={this.state.active} 
                    title="Top Up"
                    backTo="/"
                    tabOnChange={(key) => this.tabOnChange(key)}
                />
                {this.state.tabs.map((tab, key) => tab.key === this.state.active ? <tab.component /> : null)}
            </MainContainer>
        );
    }
}
 
export default TopUpPage;