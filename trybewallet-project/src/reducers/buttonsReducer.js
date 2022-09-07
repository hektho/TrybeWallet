const INITIAL_STATE = {
    attExpenses: true,
    saveExpenses: false,
};

function buttonsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'BUTTON_ATT':
            return { ...state, attExpenses: action.attButton };
        case 'BUTTON_SAVE': 
            return { ...state, saveExpenses: action.saveButton };
        default:
            return state;
    };
}

export default buttonsReducer;