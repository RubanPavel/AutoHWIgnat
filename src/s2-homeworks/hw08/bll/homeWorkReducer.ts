import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                return state.slice().sort(function (a, b) {
                    var nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                })
            } else if(action.payload === 'down') {
                return state.slice().sort(function (a, b) {
                    var nameA = a.name.toLowerCase(),
                        nameB = b.name.toLowerCase()
                    if (nameA > nameB)
                        return -1
                    if (nameA < nameB)
                        return 1
                    return 0
                })
            } else return state

        }
        case 'check': {

            return state.filter(el => el.age >= action.payload )   // need to fix
        }
        default:
            return state
    }
}
