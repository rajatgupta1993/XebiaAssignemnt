import { connect } from 'react-redux';
import Login from '../components/login/login';
import { loginDataRequest } from '../actions/actions';

const mapStateToProps = (state) => {
    return {
        isFetching: state.planets.isFetching,
        errorMessage: state.planets.errorMessage,
        people: state.planets.people,
        totalHits: state.search.totalHits,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loginDataRequest: (username) => {
            dispatch(loginDataRequest(username));
        },
    };
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
