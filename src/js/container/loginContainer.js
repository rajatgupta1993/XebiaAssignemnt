import { connect } from 'react-redux';
import Login from '../components/login/login';
import { bindActionCreators } from 'redux';
import { loginDataRequest } from '../actions/actions';

const mapStateToProps = (state, props) => {
    console.log("people in login",state.planets.people)
         return {
            isFetching:state.planets.isFetching,
            errorMessage:state.planets.errorMessage,
            people:state.planets.people,
            totalHits:state.search.totalHits
        }
}
const mapDispatchToProps = (dispatch) => {
      return {
       loginDataRequest:(username) => {
           dispatch(loginDataRequest(username))
       }
    }
}
const LoginContainer =connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer
