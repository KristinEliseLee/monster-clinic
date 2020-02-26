const React = require('react');
const _ = require('lodash');
import handleToggleExpand from '../Handlers/handleToggleExpand';
import handleInspect from '../Handlers/handleInspect';

export default function ListItem(props) {
    if (props.item.completed == true && (!('expanded' in props.item) || props.item.expanded != true)) {
        return (<li key={props.item.name} className="completed"> {props.item.name}</li >)
    }
    if (! ('children' in props.item)) {
        return (<li key={props.item.name} onClick={handleInspect(props.path)}> {props.item.name}</li>)
    }
    const resultsBuilder = []

    resultsBuilder.push(
        <li key={props.item.name} onClick={handleToggleExpand(props.path)} className={props.item.completed ? 'completed' : 'notcomplete'
        }> {props.item.name}</li >
    );
        
    if (props.item.expanded == true) {
        const children = [];
        for (let i = 0; i < props.item.children.length; i++) {
            children.push(<ListItem key={i} item={props.item.children[i]} path={`${props.path}:${i}`} />)
        }
        resultsBuilder.push(<ul key='key'>{children}</ul>)
    }
    return (<React.Fragment>{resultsBuilder}</React.Fragment>)
}
