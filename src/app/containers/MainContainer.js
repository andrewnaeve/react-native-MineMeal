import { connect } from 'react-redux';
import Main from '../Main';
import { appReady, assetsReady } from '../actions/appReady';
import { signedIn, signIn } from '../actions/auth';

const mapStateToProps = ({ auth, appIsReady }) => {
  return { auth, appIsReady };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn (email, password) { dispatch(signIn(email, password)); },
    signedIn (user) { dispatch(signedIn(user)); },
    appReady () { dispatch(appReady()); },
    assetsReady () { dispatch(assetsReady()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
