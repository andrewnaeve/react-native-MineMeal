import Entry from '../components/Entry';
import { connect } from 'react-redux';
import Order from '../Order';
import { appReady, anonymous } from '../actions/appReady';

const mapStateToProps = ({ auth, appIsReady }) => {
  return { appIsReady };
};

const mapDispatchToProps = dispatch => {
  return {
    appReady() {
      dispatch(appReady());
    },
  };
};

export default connect(null, mapDispatchToProps)(Entry);
