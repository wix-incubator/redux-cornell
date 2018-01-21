import { connect } from 'react-redux'
import CurrentUser from '../components/CurrentUser/CurrentUser';
import { selectors, actions } from '../redux/reducers';

const mapStateToProps = (state) => ({
  name: selectors.getCurrentUserName(state)
});

const { setCurrentUserName, nullifyCurrentUserName } = actions;

export default connect(mapStateToProps, { setCurrentUserName, nullifyCurrentUserName })(CurrentUser);
