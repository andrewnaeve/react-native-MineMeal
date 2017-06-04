import { connect } from 'react-redux';
import {
  updateProtein,
  updateProteinFlavors,
  updateVegetables,
  updateStarches,
  addMeal,
} from '../actions/actions';
import Selector from '../components/Selector';

const mapStateToProps = ({ currentMeal }) => {
  return { currentMeal };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProtein(protein) {
      dispatch(updateProtein(protein));
    },
    updateProteinFlavors(proteinFlavors) {
      dispatch(updateProteinFlavors(proteinFlavors));
    },
    updateVegetables(vegetables) {
      dispatch(updateVegetables(vegetables));
    },
    updateStarches(starches) {
      dispatch(updateStarches(starches));
    },
    addMeal(meal) {
      dispatch(addMeal(meal));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
