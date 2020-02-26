export const CHANGE_VIEW = 'CHANGE_VIEW';
export const TOGGLE_EXPAND = 'TOGGLE_EXPAND';
export const INSPECT = 'INSPECT';


export function change_view(view) {
    return {
        type: CHANGE_VIEW,
        view
    }
}
export function toggle_expand(monster) {
    return {
        type: TOGGLE_EXPAND,
        monster
    }
}
export function inspect(monster) {
    return {
        type: INSPECT,
        monster
    }
}