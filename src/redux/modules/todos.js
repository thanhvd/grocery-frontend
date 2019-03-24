const ADD_TODO = "ADD_TODO"
const TOGGLE_TODO = "TOGGLE_TODO"
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const initialState = {
  items: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      }
    case TOGGLE_TODO:
      return { ...state, items: state.items.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo) }
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter }
    default:
      return state
  }
}

let nextTodoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
}
)

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})