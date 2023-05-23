import {useDispatch, useSelector} from 'react-redux';
import {
	addTodo,
	deleteTodo,
	markComplete,
	updatedTodo
} from '../reducer/todoReducer/todoActions';
import {Button, Checkbox, Grid, TextField, Typography} from '@mui/material';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {changeStatus} from '../reducer/statusReducer/statusActions';
import {selectStatus} from '../reducer/statusReducer/statusSelector';
import {selectTodo} from '../reducer/todoReducer/todoSelector';

export function TodoList() {
	const todoList = useSelector(selectTodo);
	const myStatus = useSelector(selectStatus);
	const dispatch = useDispatch();

	const [text, setText] = useState('')

	const handleTodoAdd = () => {
		const id = Math.random();
		const newTodo = {id: id, title: text, date: new Date(Date.now()).toLocaleDateString()}
		dispatch( addTodo({newTodo: newTodo}) )
		setText('')
	}

	const handleComplete = (e, id) => {
		dispatch(markComplete({completed: e.target.checked, id: id}))
	}

	const handleDelete = (id) => {
		dispatch(deleteTodo({id: id}))
	}

	const handleEdit = (id) => {
		dispatch(updatedTodo({title: text, id}))
	}

	const handleStatus = () => {
		dispatch(changeStatus({status: !myStatus}))
	}


	return (
		<Grid container direction={'column'} spacing={4} m={4}>

			<Grid container direction={'row'}>

				<Grid item>
					<TextField value={text} onChange={(e) => setText(e.target.value)} id="outlined-basic" label="Outlined"
										 variant="outlined"/>
				</Grid>
				<Grid item m={2}>

					<Button disabled={myStatus} variant={'contained'} onClick={handleTodoAdd}>Add todo</Button>


					<Button variant={'contained'} onClick={handleStatus}>Change status</Button>
				</Grid>
			</Grid>

			<Grid item>
				{todoList.map((todo) => <Typography variant={'h4'} key={todo.id}><Checkbox checked={todo.complete} onChange={(e) => handleComplete(e, todo.id)}/>{todo.title}
					<DeleteIcon onClick={() => handleDelete(todo.id)}/> <EditIcon
						onClick={() => handleEdit(todo.id)}/></Typography>)}
			</Grid>
		</Grid>
	)

}