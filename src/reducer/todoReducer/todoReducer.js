import {createSlice} from '@reduxjs/toolkit';

const  initialTodoList = [
	{
		id: 1,
		title: "My first todo",
		date: "2022-01-23",
		complete:true
	},
	{
		id: 2,
		title: "My Second todo",
		date: "2022-01-23",
		complete:false
	}
]

const myInitialState = {todoList : initialTodoList}

export const todoSlice = createSlice({
	name: 'todoList',
	initialState: myInitialState,
	reducers: {
		addTodo: (state, action) => {
			state.todoList.push(action.payload.newTodo)
		},
		markComplete: (state,action) => {
			state.todoList.map((todo)=> {
				if(todo.id === action.payload.id){
					todo.complete = action.payload.completed
				}
			})
		},
		deleteTodo: (state, action) => {
			const index = state.todoList.findIndex((todo)=> todo.id === action.payload.id)

			state.todoList.splice(index,1)
		},
		updatedTodo: (state,action) => {
			state.todoList.map((todo)=> {
				if(todo.id === action.payload.id){
					todo.title = action.payload.title
				}
			})
		},
	},
})

export const todoReducer = todoSlice.reducer


