const React = require('react');
const _ = require('lodash');
import CharacterInfo from '../characterinfo';
import handleChangeView from '../Handlers/handleChangeView';
import Button from '@material-ui/core/Button';



export default function WaitingRoom(props) {
    const monster_list = [];
    for (let i = 0; i < CharacterInfo.length; i++) {
        let monster = CharacterInfo[i]
        monster_list.push((<li onClick={handleChangeView(i)} key={monster.name}> {monster.name}</li>))
    }

    return (
        <React.Fragment>
            <h1> Waiting Room </h1>
            <ul> {monster_list} </ul>
        </React.Fragment>
    )
}
