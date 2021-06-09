import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Radio from '../../../components/Radio/Radio';
import SectionWrapper from '../../../layouts/SectionWrapper';

class InstanTopUpTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nominal_top_up: [
                {
                    title: "Rp100.000",
                    key: "Rp100.000"
                },
                {
                    title: "Rp300.000",
                    key: "Rp300.000"
                },
                {
                    title: "Rp500.000",
                    key: "Rp500.000"
                }
            ],
            selected_nominal: ""
        };
    }

    nominalRadioOnChange = key => {
        this.setState({ selected_nominal: key });
    }

    render() { 
        return (
            <div>
                <div className="section-w-mt">
                    <h5>Top Up ke</h5>
                    <div className="info-box">
                        <h5>Cash</h5>
                        <p>Balance Rp15.000.000</p>
                    </div>
                </div>
                <SectionWrapper>
                    <h5>Pilih Nominal Top Up</h5>
                    <Grid columns={3} textAlign="center">
                        <Grid.Row>
                            {this.state.nominal_top_up.map((nominal, key) => <Grid.Column key={key}><Radio name="nominal" id={nominal.key} title={nominal.title} checked={this.state.selected_nominal === nominal.key} onChangeHandler={(key) => this.nominalRadioOnChange(key)} /></Grid.Column>)}
                        </Grid.Row>
                    </Grid>
                </SectionWrapper>
            </div>
        );
    }
}
 
export default InstanTopUpTab;