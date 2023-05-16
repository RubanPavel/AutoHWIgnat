const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeReducerActionType): typeof initState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state, themeId: action.id
            }
        default:
            return state
    }
}

type ThemeReducerActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeIdAC = (id: number): ThemeReducerActionType => ({
    type: 'SET_THEME_ID',
    id,
})


