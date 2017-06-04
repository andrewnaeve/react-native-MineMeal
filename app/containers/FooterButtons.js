import { connect } from 'react-redux';
import { addMeal } from '../actions/actions';
import FooterButtons from '../components/ui/FooterButtons';

const mapStateToProps = ({ currentMeal, cart }) => {
  return { currentMeal, cart };
};

const mapDispatchToProps = dispatch => {
  return {
    addMeal(meal) {
      dispatch(addMeal(meal));
    },
    clearMeal() {
      dispatch(clearMeal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterButtons);
