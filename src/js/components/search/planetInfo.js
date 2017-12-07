import React from 'react';
import PlanetInfoRow from './planetInfoRow';
import { Container } from 'native-base';
import * as PropTypes from 'prop-types';

export default function PlanetInfo(props) {

    const selectedPlanetInfo = props.navigation.state.params;
    return (
        <Container style={{ flex: 1, backgroundColor: '#444' }}>
            <PlanetInfoRow firstCol="Name"
                secndCol={selectedPlanetInfo.name} />
            <PlanetInfoRow firstCol="Rotation Period"
                secndCol={selectedPlanetInfo.rotation_period} />

            <PlanetInfoRow firstCol="Population"
                secndCol={selectedPlanetInfo.population} />

            <PlanetInfoRow firstCol="Terrains"
                secndCol={selectedPlanetInfo.terrain} />

            <PlanetInfoRow firstCol="Orbital Period"
                secndCol={selectedPlanetInfo.orbital_period} />
        </Container>
    );
}


PlanetInfo.propTypes = {
    navigation: PropTypes.object,
};

