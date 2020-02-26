import store from '../store'
import {inspect} from '../actions'

export default function handleInspect(path) {
    const monster = { path: path }
    return (() => store.dispatch(inspect(monster)))
}
