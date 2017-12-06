// import * as stateActions from '../actions/actions'
// import { connect } from 'react-redux'
// import Home from '../components/home/home'
// import { bindActionCreators } from 'redux'

// const mapStateToProps = (state, props) => {
//     console.log("people in home",state.planets.people)
//          return {
//             planets:state.planets.planets,
//             filteredPlanets:state.planets.filteredPlanets,
//             searchKey:state.search.searchKey,
//             isFetching:state.planets.isFetching,
//             errorMessage:state.planets.errorMessage,
//             people:state.planets.people,
//             totalHits:state.search.totalHits
//         }
// }
// const mapDispatchToProps = (dispatch) => {
//       return {
//        actions:bindActionCreators(stateActions, dispatch),
//     }
// }
// const HomeContainer =connect(mapStateToProps, mapDispatchToProps)(Home);
// export default HomeContainer
