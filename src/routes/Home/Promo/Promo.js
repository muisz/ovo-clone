import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Banners from './Banners';
import './Promo.css';

export default function(props){
    const data = [
        {
            src: "/images/banner.png",
            path: "#"
        },
        {
            src: "/images/banner.png",
            path: "#"
        },
        {
            src: "/images/banner.png",
            path: "#"
        }
    ]

    return (
        <div className="promo-wrapper">
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <h4>Info dan Promo Spesial</h4>
                    </Grid.Column>
                    <Grid.Column style={{textAlign: 'right'}}><Link to="#" className="a-link link-text">Lihat Semua</Link></Grid.Column>
                </Grid.Row>
            </Grid>
            <Banners data={data} />
        </div>
    );
}