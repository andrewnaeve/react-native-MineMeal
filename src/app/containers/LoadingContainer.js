import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { appReady } from '../actions/appReady';

const mapStateToProps = ({ auth, appIsReady }) => {
  return { appIsReady };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appReady () { dispatch(appReady()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
