import React from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Container, Item, Input, Icon } from 'native-base';
import { getFilteredDataRequest } from './../../actions/actions';
import PlanetRow from './planetRow';
import ActivityIndicator from '../common/activityIndicator';
import * as PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

class Search extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onCrossClicked = this.onCrossClicked.bind(this);
    }

    onSearchTextChange(searchKey) {
        this.setState({ searchTerm: searchKey });
        if (searchKey.length < 1) {
            this.props.actions.getFilteredDataSuccess([]);
        }
        else {
            this.props.actions.getFilteredDataRequest(searchKey);
        }
    }

    onCrossClicked() {
        this.setState({ searchTerm: '' });
        this.props.actions.getFilteredDataSuccess([]);
    }

    render() {

        console.log("planets in search", this.props);
        return (
            <Container style={styles.container}>

                <View style={{ backgroundColor: '#888', padding: 10 }}>
                    <Item style={{ backgroundColor: '#444', paddingHorizontal: 10 }}>
                        <Icon name="ios-search" style={{ color: '#fff' }} />

                        <Input placeholder="Search Planet"
                            placeholderTextColor="#fff"
                            onChangeText={this.onSearchTextChange.bind(this)}
                            value={this.state.searchTerm}
                            style={{ color: '#fff', height: 40, marginTop: 2 }}
                        />
                        <Icon name="md-close" style={{ color: '#fff' }}
                            onPress={this.onCrossClicked}
                        />
                    </Item>
                </View>

                {(this.props.isFetching) && (
                    <ActivityIndicator
                        animating
                        color="#1E90FF"
                        size="large"
                    />)}

                <ScrollView style={{ flex: 1 }}>
                    {(this.props.planets.length !== 0) ? (
                        <View style={{ flex: 1 }}>
                            <PlanetRow
                                {...this.props}
                                data={this.props.planets}
                            />
                        </View>) :
                        (<View style={styles.bodyContainer}>
                            <Icon name="md-search" style={{ color: '#fff' }} />
                            <Text style={styles.textStyle}>
                                Search Planet
                             </Text>
                        </View>)}
                </ScrollView>
            </Container>

        );
    }
}

export default Search;

Search.propTypes = {
    isFetching: PropTypes.bool,
    planets: PropTypes.array,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444'
    },
    textStyle: {
        fontSize: 16,
        fontFamily: 'roboto',
        color: '#fff'
    },
    bodyContainer: {
        height: height - 60,
        flex: 1,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
    }

});