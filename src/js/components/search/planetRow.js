import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import { populationRange } from '../../common/utils';
import * as PropTypes from 'prop-types';

function planetRow(props) {

    const generateRow = (data) => _.map(data, (value, key) => {
        const populationSize = populationRange(value.population);
        return (
            <TouchableOpacity key={key} onPress={() => props.navigation.navigate('PlanetInfo', value)} >
                <View style={{ padding: 10, borderWidth: 1, borderColor: '#888' }}>
                    <Text style={{ color: '#fff', fontSize: populationSize }} > {value.name}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#fff', fontSize: populationSize }} > Population -</Text>
                        <Text style={{ color: '#fff', fontSize: populationSize }} > {value.population}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    });

    return (
        <View style={{ flex: 1 }} >
            {generateRow(props.data)}
        </View>
    );
}

planetRow.propTypes = {
    data: PropTypes.array,
};

export default planetRow;
