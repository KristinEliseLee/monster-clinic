const React = require('react');
import { connect } from "react-redux";
import WaitingRoom from './WaitingRoom';
import OfficeView from './OfficeView';


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