import store from '../store'
import { change_view } from '../actions'

export default function handleChangeView(monster = null) {
    let view;
    if (monster == null) {
        view = 'waitingroom'
    }
    else {
        view = 'office'
    }
    return (()=> store.dispatch(change_view({view:view, monster:monster})))
}
