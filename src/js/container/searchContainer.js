import * as stateActions from '../actions/actions';
import { connect } from 'react-redux';
import Search from '../components/search/search';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, props) => {
    return {
        planets: state.planets.filteredPlanets,
        searchKey: state.search.searchKey,
        errorMessage: state.planets.errorMessage,
        isFetching: state.planets.isFetching,
    //    visiblePlanets: getVisiblePlanetsState(state, props),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(stateActions, dispatch),
    }
}
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
