import { connect } from 'react-redux';
import { signIn, firebaseError } from '../actions/auth';
import SignIn from '../components/SignIn';

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn(email, password) {
      dispatch(signIn(email, password));
    },
    firebaseError(error) {
      dispatch(firebaseError(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
