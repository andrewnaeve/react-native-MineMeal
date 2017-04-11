import { connect } from 'react-redux';
import { addMeal } from '../actions/meal';
import ShoppingIcon from '../components/ShoppingIcon';

const mapStateToProps = ({ cart }) => {
  return { cart }
};

export default connect(mapStateToProps)(ShoppingIcon);