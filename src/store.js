import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const initialStore = {
    items: []
};

let idCounter = 1;

function reducer(store = initialStore, action) {
    switch (action.type) {
        case 'setTodos': 
            return {
                items: action.payload
            };
        case 'addTodo':
            return {
                items: [
                    {
                        id: idCounter++,
                        name: action.payload,
                        done: false
                    },
                    ...store.items
                ]
            };
        case 'deleteTodo':
            return {
                items: store.items.filter(item => item.id !== action.payload)
            };
        case 'toggleTodo':
            return {
                items: store.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    done: item.id === action.payload ? !item.done : item.done
                }))
            }
        default:
            return store;
    }
}

export function loadTodos() {
    return async dispatch => {
        const response = await fetch('/api/todos');
        const todos = await response.json();
        dispatch({
            type: 'setTodos',
            payload: todos
        });
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        todos: reducer
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
