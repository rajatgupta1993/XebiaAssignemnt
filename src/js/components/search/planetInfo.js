import React from 'react';
import { Text, View } from 'react-native';
import PlanetInfoRow from './planetInfoRow';
import { Container } from 'native-base';

export default class PlanetInfo extends React.PureComponent {
    render() {
        console.log("props in details", this.props);
        const selectedPlanetInfo = this.props.navigation.state.params;
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
} 