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
    const isDead = props.results.results.slice(0, 7) === "[DEATH]";
    const deathModal = isDead ? <div id="death" >
        <h1> YOU DIED</h1>
        <h3> You shouldn't have tried to inspect {props.results.question} on {props.monster.name}</h3>
        <h5> Results : {props.results.results} </h5>
        <Button variant="primary"
            onClick={handleChangeView()}>
            Return to waiting room
                </Button>
    </div> : null;

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
        {deathModal}
    </React.Fragment>)
}

function mapStateToProps(state) {
    return ({ monster: state.monster, results: state.results });

}

const OfficeView = connect(mapStateToProps)(ConnectedOfficeView);
export default OfficeView;