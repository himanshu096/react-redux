import React from 'react';
import './App.css';
import {TodoList} from './component/TodoList';
import { Grid} from '@mui/material';

function App() {
  return (
  <React.Fragment>
    <Grid justifyContent="center"
          alignItems="center" container>
      <Grid item> <TodoList /></Grid>
    </Grid>
  </React.Fragment>

  );
}

export default App;
