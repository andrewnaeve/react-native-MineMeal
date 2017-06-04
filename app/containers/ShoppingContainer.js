import { connect } from 'react-redux';
import { addMeal } from '../actions/actions';
import ShoppingIcon from '../components/ShoppingIcon';

const mapStateToProps = ({ cart }) => {
  return { cart };
};

export default connect(mapStateToProps)(ShoppingIcon);
