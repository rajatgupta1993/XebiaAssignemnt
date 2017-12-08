import * as stateActions from '../actions/actions';
import { connect } from 'react-redux';
import Search from '../components/search/search';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return {
        planets: state.planets.filteredPlanets,
        searchKey: state.search.searchKey,
        errorMessage: state.planets.errorMessage,
        isFetching: state.planets.isFetching,
        search: state.search,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(stateActions, dispatch),
    };
};
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
