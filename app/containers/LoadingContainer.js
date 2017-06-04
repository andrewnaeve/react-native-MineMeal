import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { appReady, onceOnly } from '../actions/appReady';

const mapStateToProps = ({ appIsReady }) => {
  return { appIsReady };
};

const mapDispatchToProps = dispatch => {
  return {
    appReady() {
      dispatch(appReady());
    },
    onceOnly() {
      dispatch(onceOnly());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
