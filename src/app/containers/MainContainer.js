import { connect } from 'react-redux';
import Main from '../Main';
import { appReady } from '../actions/appReady';
import { signedIn } from '../actions/auth';


const mapStateToProps = ({ auth, appIsReady }) => {
  return { auth, appIsReady }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signedIn(user) { dispatch(signedIn(user)); },
    appReady() { dispatch(appReady()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);