import * as A from './actions';
import Types from '../../classes/types';

const { tasks } = Types;

const initialState = {
    tasks,
    currentTask: null,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case A.SET_TASKS:
            return ({ ...state, tasks: action.payload })
        case A.SET_CURRENT_TASK:
            return ({ ...state, currentTask: action.payload })
        default:
            return state;
    }
};
