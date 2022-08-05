import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import Button from 'react-bootstrap/Button';

function App() {

  function nome(): string {
    return "To-Do List App";
  }
  
  return <>
    <h1>{ nome() }</h1>
    <TaskList />
    <Button></Button>
  </>;
}

export default App;
