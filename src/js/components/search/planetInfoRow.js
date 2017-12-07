import React from 'react';
import { Text, View } from 'react-native';
import * as PropTypes from 'prop-types';

export default function PlanetInfoRow(props) {
    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#888', justifyContent: 'space-between', padding: 10 }}>
            <Text style={{ color: '#fff' }}>{props.firstCol}</Text>
            <Text style={{ color: '#fff' }}>{props.secndCol}</Text>
        </View>
    );
}

PlanetInfoRow.propTypes = {
    firstCol: PropTypes.string,
    secndCol: PropTypes.string,
};
