import React from 'react';
import {
    ActivityIndicator,
    View,
    Dimensions,
} from 'react-native';
import * as PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');

export default function activityIndicator({ animating, color, size }) {
    return (
        <View style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator
                animating={animating}
                color={color}
                size={size}
            />
        </View>
    );
}

activityIndicator.propTypes = {
    animating: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.string,
};
