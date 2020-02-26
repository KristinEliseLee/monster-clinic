const React = require('react');
const _ = require('lodash')
import { connect } from "react-redux";
import ListItem from '../Components/ListItem'
import handleChangeView from '../Handlers/handleChangeView'

function ConnectedOfficeView(props) {
    const inspectList = [];
    for (let i = 0; i < props.monster.inspections.length; i++) {
        let inspection = props.monster.inspections[i]
        inspectList.push(<ListItem key={i} item={inspection} path={`${i}`}/>)
    }
    return (<React.Fragment><h1> Office View </h1>
        <button onClick={handleChangeView()}>Return to waiting room</button>
        
        <div id="inspect"> {inspectList} </div>
        <div id="picture"><img src={props.monster.image}/></div>
        <div id="results"><h4>{props.results.question}</h4><p>{props.results.results}</p></div>
    </React.Fragment>)
}

function mapStateToProps(state) {
    return ({ monster: state.monster, results: state.results });
  
}

const OfficeView = connect(mapStateToProps)(ConnectedOfficeView);
export default OfficeView;