const React = require('react');
const _ = require('lodash')
import CharacterData from '../CharacterData'
import handleChangeView from '../Handlers/handleChangeView'



export default function WaitingRoom(props) {
    const monster_list = [];
    for (let i = 0; i < CharacterData.length; i++) {
        let monster = CharacterData[i]
        monster_list.push((<li onClick={handleChangeView(i)} key={monster.name}> {monster.name}</li>))
    }

    return (
        <React.Fragment>
            <h1> Waiting Room </h1>
            <ul> {monster_list} </ul>
        </React.Fragment>
    )
}
