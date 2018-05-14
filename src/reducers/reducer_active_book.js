// state here is not application state, only the associated state.
// state = null: ES6 syntax, if state = undefined set it to null.
// otherwise return state will cause an error at first time running.
export default function(actionState = null, action) { 
    switch(action.type) {                       
        case'BOOK_SELECTED':
            // Do not do "state.title = 'abc'; return state;", always return a new object.
            return action.payload;
    }
    return actionState;
}