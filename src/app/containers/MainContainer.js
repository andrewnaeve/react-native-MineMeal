import { connect } from 'react-redux';
import Main from '../Main';
import { appReady } from '../actions/appReady';
import { signedIn, signIn } from '../actions/auth';

const mapStateToProps = ({ auth, appIsReady }) => {
  return { auth, appIsReady };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn (email, password) { dispatch(signIn(email, password)); },
    signedIn (user) { dispatch(signedIn(user)); },
    appReady () { dispatch(appReady()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
