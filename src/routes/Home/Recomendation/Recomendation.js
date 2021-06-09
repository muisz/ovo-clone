import React from 'react';
import { Grid } from 'semantic-ui-react';
import SectionWrapper from '../../../layouts/SectionWrapper';
import './Recomendation.css';
import RecomendationCard from './RecomendationCard';

export default function(props){
    const data = [
        {
            src: "/images/banner2.png",
            path: "#",
            category: "Asuransi - Kesehatan",
            title: "Cashback 100% Asuransi"
        },
        {
            src: "/images/banner2.png",
            path: "#",
            category: "Asuransi - Kesehatan",
            title: "Cashback 100% Asuransi"
        },
        {
            src: "/images/banner2.png",
            path: "#",
            category: "Asuransi - Kesehatan",
            title: "Cashback 100% Asuransi"
        },
        {
            src: "/images/banner2.png",
            path: "#",
            category: "Asuransi - Kesehatan",
            title: "Cashback 100% Asuransi"
        }
    ]
    return (
        <SectionWrapper>
            <h4>Rekomendasi Pilihan</h4>
            <RecomendationCard data={data} />
        </SectionWrapper>
    );
}