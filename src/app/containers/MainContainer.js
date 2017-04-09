import { connect } from 'react-redux';
import Main from '../Main';

const mapStateToProps = ({ auth }) => {
  return { auth }
};

export default connect(mapStateToProps)(Main);