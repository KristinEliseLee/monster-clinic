const React = require('react');
import { connect } from "react-redux";
import WaitingRoom from './WaitingRoom';
import OfficeView from './OfficeView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons';


function ConnectedApp(props) {
    if (props.view == 'waitingroom') {
        return (<WaitingRoom />)
    }
    else {
        return (<OfficeView />)
    }
}

function mapStateToProps(state) {
    return ({ view: state.view });
}

const App = connect(mapStateToProps)(ConnectedApp);
export default App;