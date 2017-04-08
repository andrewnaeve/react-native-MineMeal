import { connect } from 'react-redux';
import Main from '../Main';
import { signUp } from '../actions/auth';
import SignUp from '../components/SignUp';

const mapDispatchToProps = (dispatch) => {
  return {
    signUp() { dispatch(signUp()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);