import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Grid } from 'semantic-ui-react';
import Fiturs from './Fiturs';
import './highlight.css';

export default function(props){
    return (
        <div className="highlight">
            <div className="highlight-background">
                <div className="highlight-background-info">
                    <div>
                        <span className="info-name">Muhamad Abdul Muis</span>
                        <span className="info-icon">
                            <Link to="#"><Icon name="bell" size="large" /></Link>
                        </span>
                    </div>
                    <span className="info-text">Cash</span> <br />
                    <span className="info-balance">Rp15.000.000</span> <br />
                    <span className="info-text">Points <span className="info-point">26.673</span></span>
                </div>
            </div>
            <div className="highlight-balance">
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Link to="#"><Icon name="plus square outline" size="large" />
                            <p>Top UP</p></Link>
                        </Grid.Column>
                        <Grid.Column>
                            <Link to="#"><Icon name="sync" size="large" />
                            <p>Transfer</p></Link>
                        </Grid.Column>
                        <Grid.Column>
                            <Link to="#"><Icon name="history" size="large" />
                            <p>History</p></Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            <div className="fitur">
                <Fiturs />
            </div>
        </div>
    );
}