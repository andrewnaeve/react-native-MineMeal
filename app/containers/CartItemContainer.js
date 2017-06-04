import { connect } from 'react-redux';
import { deleteMeal } from '../actions/actions';
import CartItem from '../components/CartItem';

const mapStateToProps = ({ cart }) => {
  return { cart };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMeal(index) {
      dispatch(deleteMeal(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
