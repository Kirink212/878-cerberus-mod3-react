import './App.css';
import TaskList from './components/TaskList';

function App() {

  function nome(): string {
    return "To-Do List App";
  }
  
  return <>
    <h1>{ nome() }</h1>
    <TaskList />
  </>;
}

export default App;
