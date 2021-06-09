import React from 'react';
import { Grid } from 'semantic-ui-react';
import { FcFlashOn, FcBullish, FcIphone, FcSelfServiceKiosk, FcLike, FcInfo, FcPrivacy, FcPuzzle } from 'react-icons/fc';
import Fitur from './Fitur';

export default function(props){
    return (
        <Grid columns={4}>
            <Grid.Row>
                <Grid.Column><Fitur title="PLN" icon={FcFlashOn} path="#" /></Grid.Column>
                <Grid.Column><Fitur title="Pulsa" icon={FcIphone} path="#" /></Grid.Column>
                <Grid.Column><Fitur title="Voucher Game" icon={FcPuzzle} path="#" /></Grid.Column>
                <Grid.Column><Fitur title="Invest" icon={FcBullish} path="#" /></Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column><Fitur title="BPJS" icon={FcLike} path="#" /></Grid.Column>
                <Grid.Column><Fitur title="Internet TV &amp; Kabel" icon={FcSelfServiceKiosk} path="#" /></Grid.Column>
                <Grid.Column><Fitur title="Proteksi" icon={FcPrivacy} path="#" /></Grid.Column>
                <Grid.Column><Fitur title="Lainnya" icon={FcInfo} path="#" /></Grid.Column>

            </Grid.Row>
        </Grid>
    );
}