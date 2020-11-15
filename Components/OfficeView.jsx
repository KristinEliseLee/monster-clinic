const React = require('react');
const _ = require('lodash')
import { connect } from "react-redux";
import ListItem from '../Components/ListItem'
import handleChangeView from '../Handlers/handleChangeView';
import Button from '@material-ui/core/Button';
import HealingIcon from '@material-ui/icons/Healing';
import 'bootstrap/dist/css/bootstrap.min.css';

function ConnectedOfficeView(props) {
    const inspectList = [];
    for (let i = 0; i < props.monster.inspections.length; i++) {
        let inspection = props.monster.inspections[i]
        inspectList.push(<ListItem key={i} item={inspection} path={`${i}`} />)
    }
    return (<React.Fragment>
        <h1> Office View </h1>
        <Button variant="primary"
            onClick={handleChangeView()}>
            Return to waiting room
                </Button>

        <div id="officeView">
            <div id="inspect"> {inspectList} </div>
            <img id="picture" src={props.monster.image} />
        </div>
        <div id="resultsBox">
            <h4 id="question"> {props.results.question}</h4>
            <p id="answer"> {props.results.results} </p>
        </div>
    </React.Fragment>)
}

function mapStateToProps(state) {
    return ({ monster: state.monster, results: state.results });

}

const OfficeView = connect(mapStateToProps)(ConnectedOfficeView);
export default OfficeView;