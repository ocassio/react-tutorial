import {createSlice, createSelector, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    showError: false,
    loading: false
};

let idCounter = 1;

export const loadTodos = createAsyncThunk(
    'todos/loadTodos',
    async () => {
        const response = await fetch('/api/todos');
        return await response.json();
    }
);

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos(state, action) {
            state.items = action.payload;
        },
        addTodo(state, action) {
            state.items.push({
                id: idCounter++,
                name: action.payload,
                done: false
            });
        },
        deleteTodo(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        toggleTodo(state, action) {
            const item = state.items.find(item => item.id === action.payload);
            item.done = !item.done;
        }
    },
    extraReducers: builder => {
        builder.addCase(
            loadTodos.fulfilled,
            (state, action) => {
                state.items = action.payload;
                state.loading = false;
            }
        );
        builder.addCase(
            loadTodos.rejected,
            state => {
                state.showError = true;
            }
        );
        builder.addCase(
            loadTodos.pending,
            state => {
                state.loading = true
            }
        )
    }
});

export const { setTodos, addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export const selectTodos = state => state.todos.items;
export const selectTodosCount = state => state.todos.items.length;
export const selectNonCompletedTodosCount = createSelector(
    [selectTodos],
    (items) => items.filter(item => !item.done).length
);
export const selectLoading = state => state.todos.loading;
export const selectShowError = state => state.todos.showError;

export default todosSlice.reducer;
