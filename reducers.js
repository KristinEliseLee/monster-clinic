import CharacterInfo from './characterinfo'
import { CHANGE_VIEW, TOGGLE_EXPAND, INSPECT } from './actions'

const _ = require('lodash');

export const initialState = {
    view: 'waitingroom',
    monster: null,
    results: {question:'Ask a question', results:''},
}

export function rootReducer(state = initialState, action) {
    const cloneState = _.cloneDeep(state);
    let current
    let path
    switch (action.type) {
        case CHANGE_VIEW:
            if (action.view != 'waitingroom') {
                cloneState.monster = _.cloneDeep(CharacterInfo[action.view.monster]);
                cloneState.view = action.view.view;
                cloneState.results = initialState.results;
            }
            else {
                return initialState
            }

            break;

        case TOGGLE_EXPAND:
            path = action.monster.path.split(":");
            current = cloneState.monster.inspections[path[0]];
            for (let item of path.slice(1)) {
                current = current.children[item];
            }
            current.expanded = !current.expanded;
            break;

        case INSPECT:
            const parents = [];
            path = action.monster.path.split(":");
            current = cloneState.monster.inspections[path[0]];
            for (let index of path.slice(1)) {
                parents.push(current)
                current = current.children[index];
            }
            cloneState.results = { results: current.results, question: current.name };
            current.completed = true;
            let parent = parents.pop();
            let lower_level_complete = true;
            while (parent != undefined && lower_level_complete== true) {
                for (let child of parent.children) {
                    if (child.completed != true) {
                        lower_level_complete = false;
                        break;
                    }
                }
                parent.completed = lower_level_complete;
                parent = parents.pop();
            }
            break;
    }
    return cloneState;
}