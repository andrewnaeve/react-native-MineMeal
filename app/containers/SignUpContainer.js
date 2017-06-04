import { connect } from 'react-redux';
import { signUp, firebaseError } from '../actions/auth';
import SignUp from '../components/SignUp';

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp(email, password) {
      dispatch(signUp(email, password));
    },
    firebaseError(error) {
      dispatch(firebaseError(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
