import { connect } from 'react-redux';
import { signOut } from '../actions/auth';
import CartModal from '../components/CartModal';

const mapStateToProps = ({ cart }) => {
  return { cart };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut() {
      dispatch(signOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
