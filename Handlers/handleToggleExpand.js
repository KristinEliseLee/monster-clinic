import store from '../store'
import { toggle_expand } from '../actions'

export default function handleToggleExpand(path) {
    const monster = { path: path }
    return (() => store.dispatch(toggle_expand(monster)))
}
